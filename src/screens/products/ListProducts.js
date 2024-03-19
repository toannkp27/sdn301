import axios from "axios";
import { BreadCrumb } from "primereact/breadcrumb";
import { Image } from "primereact/image";
import { Paginator } from "primereact/paginator";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { GridForm, Inputz } from "../dashboard/components/forrm/ForrmList";
import { useGetParams } from "../hooks";

const ListProducts = () => {
  const initParam = useGetParams();
  const [params, setParams] = useState(initParam);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ key_search: "", floor: "" });
  const [brands, setBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  
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

  console.log(selectedBrand);

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
  console.log(products);
  const items = [{ label: "Products" }];
  const home = { icon: "pi pi-home", url: "http://localhost:3000/" };
  const [currentPage, setCurrentPage] = useState(1);
  const [rows, setRows] = useState(12);
  const [first, setFirst] = useState(0);
  const productsOnPage = products.slice(first, first + rows);
  const totalRecords = products.length;
  const onPageChange = (event) => {
    setFirst(event.first);
    setCurrentPage(event.page + 1);
  };
  const renderProducts = () => {
    if (products.length === 0) {
      return (
        <div>
          <h4>Không có sản phẩm</h4>
        </div>
      );
    } else {
      return productsOnPage.map((p) => {
        return (
          <div
            key={p.id}
            className="col-3 flex align-items-center justify-content-center"
          >
            <div className="m-2 border-round-md">
              <Image
                className="border-round-md"
                src={p.images[0].url}
                alt="Image"
                width="280"
                preview
              />
              <Link to={`/detail/${p._id}`} style={{ textDecoration: "none" }}>
                <div className="font-bold text-base" style={{ color: "black" }}>
                  {p.name}
                </div>
                <div className="text-xl text-red-400 inline-block font-bold">
                  {p.price * 0.5}$
                </div>{" "}
                <span className="line-through text-base text-color inline-block">
                  {p.price}$
                </span>{" "}
              </Link>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div
      className="container"
      style={{ paddingTop: "15px", paddingBottom: "20px" }}
    >
      <div className="m-3">
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

      <div className="m-2 w-full">
        <BreadCrumb model={items} home={home} />
      </div>

      <hr />
      <div className="grid mt-2 surface-ground p-3 surface-0 shadow-2">
        {renderProducts()}
      </div>
      <div className="p-mt-2">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={totalRecords}
          onPageChange={onPageChange}
          className="p-mt-2"
          currentPageReportTemplate={`Showing {first} to {last} of {totalRecords} products`}
        />
      </div>
    </div>
  );
};

export default ListProducts;
