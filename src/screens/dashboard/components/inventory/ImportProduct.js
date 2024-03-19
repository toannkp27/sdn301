import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useEffect, useState } from "react";
import { DropdownForm, InputNumberFormV2 } from "../../../../components";

const ImportProduct = (props) => {
    const { visible, setVisible } = props;
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [sizes, setSizes] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9999/products").then((res) => {
            setProduct(res.data);
        });
    }, []);
    useEffect(() => {
        axios.get("http://localhost:9999/sizes").then((res) => {
            setSizes(res.data.data);
        });
    }, []);
    const handleAddProduct = () => {
        axios
            .post("http://localhost:9999/inventory/importProduct", {
                productId: productName,
                size: size,
                price: price,
                quantity: quantity,
            })
            .then((response) => {
                if (response.data.success) {
                    console.log("Product added successfully!");
                    setProductName("");
                    setPrice("");
                    setSize("");
                    setQuantity("")
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
            header="Import Product"
            visible={visible}
            style={{ width: "70vw" }}
            modal
            onHide={onHide}
            footer={dialogFooter}
        >
            <div className="card bg-color m-4 ">
                <div className="formgrid grid m-3">
                    <div className="field col">
                        <DropdownForm
                            value={productName}
                            options={product}
                            optionValue="_id"
                            onChange={(e) => setProductName(e.target.value)}
                            label="Product"
                        />
                        <InputNumberFormV2
                            id="quantity_in_stock"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            label="Quantity In Stock"
                        />
                    </div>
                    <div className="field col">
                        <InputNumberFormV2
                            id="price"
                            value={price}
                            label="Price"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <DropdownForm
                            value={size}
                            options={sizes}
                            optionValue="_id"
                            optionLabel="size"
                            onChange={(e) => setSize(e.target.value)}
                            label="Size"
                        />
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ImportProduct;
