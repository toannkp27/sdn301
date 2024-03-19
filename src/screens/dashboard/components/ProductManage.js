import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import AddProduct from "../../AddProduct";
import { useGetParams } from "../../hooks";
import { Dropdownz, GridForm, Inputz } from "./forrm/ForrmList";
import axios from "axios";
import { FormInput } from "../../../uiCore";
import { Dropdown } from "primereact/dropdown";

const ProductManage = () => {
  const [first, setFirst] = useState(0);
  const [visibledDialog, setVisibledDialog] = useState(false);
  const rows = 10;
  const initParam = useGetParams();
  const [params, setParams] = useState(initParam);
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ key_search: "", floor: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [brands, setBrands] = useState([]);

  const fetchData = async () => {
    try {
      let response;
      if (searchTerm) {
        response = await axios.get(
          `http://localhost:9999/search/${searchTerm}`
        );
        console.log(response.data);
      } else {
        response = await axios.get("http://localhost:9999/products");
      }
      setProducts(response.data);
    } catch (error) {
      console.error("Lỗi khi gọi API lấy danh sách sản phẩm:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:9999/brands/listBrand")
      .then((response) => setBrands(response.data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  const fetchDataByBrand = async (selectedBrand) => {
    try {
      let response;
      if (selectedBrand) {
        response = await axios.get(
          `http://localhost:9999/products/brand/${selectedBrand}`
        );
      } else {
        response = await axios.get("http://localhost:9999/products");
      }
      setProducts(response.data);
    } catch (error) {
      console.error(
        "Lỗi khi gọi API lấy danh sách sản phẩm theo brand ",
        error
      );
    }
  };


  const handeDeleteProduct = (index) => {
    if (window.confirm("Do you want to product - ID: " + index + "?")) {
      axios
        .delete("http://localhost:9999/products/" + index)
        .then(() => {
          alert("Delete successfully!");
          setProducts(products.filter((p) => p._id !== index));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    if (!isSearching) {
      fetchData();
    }
  }, [isSearching]);

  const handleSearchButtonClick = () => {
    setSearchButtonClicked(true);
  };

  useEffect(() => {
    if (searchButtonClicked) {
      setSearchButtonClicked(false);
      fetchData();
    }
  }, [searchButtonClicked]);


  const handleBrandChange = (e) => {
    if (e.value) {
      setSelectedBrand(e.value);
      fetchDataByBrand(e.value._id);
    } else {
      setSelectedBrand(null);
      fetchData();
    }
  };

  const formatCurrency = (value) => {
    if (value) {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }
    return "";
  };

  const imageBodyTemplate = (product) => {
    return (
      <img
        src={product.images[0].url}
        alt={product.images.caption}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  const handleEyeClick = (rowData) => {
    setVisible(true);
  };

  const ActionBody = (rowData) => {
    return (
      <>
        <Button
          type="submit"
          icon="pi pi-trash"
          rounded
          className="bg-red-500"
          onClick={(e) => handeDeleteProduct(rowData._id)}
        ></Button>
        <Button
          type="button"
          icon="pi pi-pencil"
          className="bg-primary"
          rounded
          outlined
          onClick={() => handleEyeClick(rowData)}
        />
      </>
    );
  };

  return (
    <div className="w-full border-round border-solid border-1 surface-border">
      <hr />

      <>
        <div className="flex flex-wrap align-items-center justify-content-between gap-2 m-2">
          <span className="text-3xl text-900 font-bold">Products Manage</span>
        </div>
        <hr />
        <div className="m-3" style={{ display: "flex", alignItems: "center" }}>
          <GridForm
            setParams={setParams}
            filter={filter}
            setFilter={setFilter}
            className="lg:col-12"
          >
            <Inputz
              value={searchTerm}
              placeholder="Find by name"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              onClick={handleSearchButtonClick}
              icon="pi pi-search"
              label="Search"
              size="small"
              severity="info"
              raised
              type="button"
              style={{ height: "50px" }}
              className="ml-2"
            />
            <Dropdownz
              value={filter.status}
              // options={status}
              onChange={(e) => setFilter({ ...filter, status: e.target.value })}
              placeholder="Size"
              style={{ height: "50px" }}
            />
                <Dropdown
            value={selectedBrand}
            options={[{ name: "All Brands", _id: null }, ...brands]}
            optionLabel="name"
            style={{ height: "50px", width: "20%", marginLeft: "30px" }}
            onChange={handleBrandChange}
            placeholder="Brands"
          />
          </GridForm>
        </div>
      </>

      <Button
        onClick={() => setVisible(true)}
        icon="pi pi-plus"
        label="Add New Product"
        size="small"
        severity="info"
        raised
        type="button"
        className="m-2 ml-4"
      />

      <DataTable
        className="m-2"
        value={products}
        rows={rows}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        paginator
        currentPageReportTemplate={`In total there are ${
          products ? products.length : 0
        } products.`}
      >
        <Column field="_id" header="ID" style={{ maxWidth: "5px" }}></Column>
        <Column
          field="name"
          header="Name"
          style={{ minWidth: "15rem" }}
        ></Column>
        <Column field="price" header="Price" body={priceBodyTemplate}></Column>
        <Column
          header="Sizes"
          style={{ minWidth: "15rem" }}
          body={(rowData) => {
            console.log(rowData); // Log dữ liệu của mỗi hàng (sản phẩm) ra console
            return rowData.size.sizes.map((size) => (
              <span key={size._id}>{size.size} </span>
            ));
          }}
        />
        <Column field="quantity" header="Quantity"></Column>
        <Column field="total_cost" header="Total_Cost"></Column>
        <Column field="brand.name" header="Brand"></Column>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column header="Operation" body={ActionBody}></Column>
      </DataTable>

      {visible === true && (
        <AddProduct visible={visible} setVisible={setVisible} />
      )}
    </div>
  );
};
export default ProductManage;
