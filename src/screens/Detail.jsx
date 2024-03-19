import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";
import { InputText } from "primereact/inputtext";
import Comments from "./Comments";
import { setToast } from "../redux/features";
import { listToast } from "../constants";

const Detail = () => {
  const [value, setValue] = useState(1);
  const [images, setImages] = useState([]);
  const [products, setProducts] = useState({});
  const { pid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductData();
  }, [pid]);

  const fetchProductData = useCallback(() => {
    axios
      .get(`http://localhost:9999/products/${pid}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });

    axios
      .get(`http://localhost:9999/images/${pid}`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product images:", error);
      });
  }, [pid]);

  const addToCart = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("Access token is missing.");
      return;
    }

    const data = {
      user: localStorage.getItem("username"),
      items: [
        {
          productName: products.name,
          quantity: value,
          price: products.price,
          image: images.length > 0 ? images[0].url : "",
        },
      ],
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:9999/cart/", data, config)
      .then((response) => {
        if (response.data) {
          dispatch(
            setToast({ ...listToast[0], detail: "Product added to cart!!" })
          );
          console.log("Product added to cart!!");
        } else {
          console.error("Failed to add product");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const increaseQuantity = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decreaseQuantity = () => {
    if (value > 1) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  const items = [
    { label: "List Products", url: "http://localhost:3000/listproduct" },
    { label: products.name },
  ];

  const home = { icon: "pi pi-home", url: "http://localhost:3000/" };

  return (
    <div className="container" style={{ width: "95%", margin: "0 auto" }}>
      <div className=" w-full">
        <BreadCrumb model={items} home={home} />
      </div>
      <div className="card bg-color ">
        <div className="grid grid-form">
          <div className="col-6 lg:col-6  ">
            <Galleria
              value={images}
              numVisible={4}
              style={{ maxWidth: "640px" }}
              item={(item) => (
                <img
                  src={item.url}
                  alt={item.caption}
                  style={{ width: "100%" }}
                />
              )}
              thumbnail={(item) => (
                <img
                  src={item.url}
                  alt={item.caption}
                  style={{ width: "50%" }}
                />
              )}
            />
          </div>
          <div className="col-6 lg:col-6  ">
            <h2 key={products._id}>{products.name}</h2>
            <div className=" ">
              <div className="text-4xl text-red-400 inline-block font-bold">
                {products.price}$
              </div>
            </div>
            <div className="mt-2">Quantity:</div>
            <div className="mt-2">
              <Button
                className=" bg-white text-green-600 h-4rem w-4rem border-round border-2 border-green-600"
                label="-"
                onClick={decreaseQuantity}
              />
              <InputText
                className="h-4rem w-4rem border-round border-2 border-green-600"
                style={{ textAlign: "center" }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button
                className=" bg-white text-green-600 h-4rem w-4rem border-round border-2 border-green-600"
                label="+"
                onClick={increaseQuantity}
              />
            </div>
            <div className="mt-2">
              <Button
                className="bg-green-600 py-3"
                label="Add To Cart"
                onClick={addToCart}
                style={{ width: "20%", fontSize: "20px" }}
                icon="pi pi-check-square"
                size="large"
              />
            </div>
            <div className="mt-2">
              <Button
                className=" border-round border-2 bg-white text-green-600 border-green-600 py-3"
                style={{ width: "20%", fontSize: "20px" }}
                label="Check Out"
                icon="pi pi-shopping-cart"
                size="large"
              />
            </div>
            <div className="mt-2">
              <p style={{ fontSize: "25px" }}>{products.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="comments ">
        <Comments />
      </div>
    </div>
  );
};

export default Detail;
