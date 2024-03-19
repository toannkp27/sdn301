import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart_Shop = () => {
  const [cartData, setCartData] = useState([]);
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        console.log(username);
        console.log(token);
        if (!username) throw new Error("Username not found");

        // Gửi yêu cầu để lấy dữ liệu giỏ hàng của username từ API với token trong tiêu đề Authorization
        const response = await axios.get(
          `http://localhost:9999/cart/${username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Kiểm tra nếu response.data không phải là mảng, chuyển đổi thành mảng
        const cartArray = Array.isArray(response.data)
          ? response.data
          : [response.data];

        setCartData(cartArray);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [username, token]);

  return (
    <div className="cart-container">
      {cartData.length > 0 ? (
        cartData.map((cart) => (
          <div key={cart._id} className="cart">
            <h2 className="user">User: {cart.user}</h2>
            <ul className="item-list">
              {cart.items.map((item) => (
                <li key={item._id} className="item">
                  <p>Product Name: {item.productName}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </li>
              ))}
            </ul>
            <p className="created-at">
              Created At: {new Date(cart.createdAt).toLocaleString()}
            </p>
            <p className="updated-at">
              Updated At: {new Date(cart.updatedAt).toLocaleString()}
            </p>
          </div>
        ))
      ) : (
        <p>No cart data available</p>
      )}
    </div>
  );
};

export default Cart_Shop;
