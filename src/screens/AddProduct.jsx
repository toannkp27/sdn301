import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload"; // Thêm thư viện file upload
import React, { useEffect, useState } from "react";
import { DropdownForm, InputForm, InputNumberFormV2 } from "../components";

const AddProduct = (props) => {
  const { visible, setVisible } = props;
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]); // Thêm state để lưu trữ file đã tải lên

  useEffect(() => {
    axios.get("http://localhost:9999/category").then((res) => {
      setSizes(res.data);
    });
  }, []);

  const handleAddProduct = () => {
    // Gửi request để thêm sản phẩm mới
    axios
      .post("http://localhost:9999/products/createProduct", {
        name: productName,
        description: description,
        size: size,
        price: price,
        quantity: quantity,
        brand: brand,
        total_cost: price * quantity,
        image: imageUrl, // Thêm đường dẫn hình ảnh vào dữ liệu gửi đi
      })
      .then((response) => {
        if (response.data.success) {
          console.log("Product added successfully!");
          setProductName("");
          setDescription("");
          setImageUrl("");
          setBrand("");
          setPrice("");
          setSizes([]);
          setUploadedFiles([]); // Reset trạng thái của file đã tải lên
        } else {
          console.error("Failed to add product");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .then((e) => {
        setVisible(false);
      });
  };

  const onHide = () => {
    setVisible(false);
  };

  const dialogFooter = (
    <div>
      <Button label="Add new" icon="pi pi-plus" onClick={handleAddProduct} />
      <Button
        label="Close"
        icon="pi pi-times"
        onClick={onHide}
        className="bg-red-500 border-red-500"
      />
    </div>
  );

  return (
    <Dialog
      header="Add Product"
      visible={visible}
      style={{ width: "70vw" }}
      modal
      onHide={onHide}
      footer={dialogFooter}
    >
      <div className="card bg-color m-4 ">
        <div className="formgrid grid m-3">
          <div className="field col">
            <InputForm
              id="product_name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              label="Product Name"
            />
            <InputForm
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              label="Description"
            />
            <InputNumberFormV2
              id="price"
              value={price}
              label="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <DropdownForm
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
              label="Brand"
            />
            <div className="mb-3 px-2 change-disabled">
              <div className="w-full flex justify-content-between">
                <label className="font-medium w-full">Status</label>
              </div>
              {/* <div>{statusBodyTemplate(obj.status)}</div> */}
            </div>
          </div>
          <div className="field col">
            <InputNumberFormV2
              id="description"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              label="Size"
            />
            <InputNumberFormV2
              id="quantity_in_stock"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              label="Quantity In Stock"
            />
            <InputNumberFormV2
              id="total_cost"
              value={price && quantity ? price * quantity : null}
              disabled
              label="Total Cost"
            />
            <div className="mt-4">
              {/* Component FileUpload để tải lên hình ảnh */}
              <FileUpload
                mode="basic"
                accept="image/*"
                maxFileSize={1000000}
                onSelect={(e) => {
                  const file = e.files[0];
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    setImageUrl(e.target.result); // Lưu đường dẫn hình ảnh vào state
                  };
                  reader.readAsDataURL(file);
                  setUploadedFiles([...uploadedFiles, file]); // Lưu file đã tải lên vào state
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddProduct;
