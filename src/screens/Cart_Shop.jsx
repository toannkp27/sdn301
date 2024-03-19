import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

const Cart_Shop = () => {
  const [cartData, setCartData] = useState([]);
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        if (!username) throw new Error("Username not found");

        const response = await axios.get(
          `http://localhost:9999/cart/${username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

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

  const calculateSubtotal = (cartData) => {
    return cartData.reduce(
      (total, cart) =>
        total +
        cart.items.reduce(
          (subtotal, item) => subtotal + item.price * item.quantity,
          0
        ),
      0
    );
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartData.map((cart) => {
      const updatedItems = cart.items.map((item) => {
        if (item._id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return { ...cart, items: updatedItems };
    });
    setCartData(updatedCart);
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:9999/cart/${username}/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedCart = cartData.map((cart) => {
        const updatedItems = cart.items.filter((item) => item._id !== itemId);
        return { ...cart, items: updatedItems };
      });
      setCartData(updatedCart);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <Container className="pt-5 pb-5">
      <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
      <p className="mb-5 text-center">
        <i className="text-info font-weight-bold">{cartData.length}</i> items in
        your cart
      </p>
      <Row>
        <Col className="text-center ">
          <div className="table-responsive">
            <table className="table table-condensed">
              <thead>
                <tr>
                  <th style={{ width: "15%" }}>Image</th>
                  <th style={{ width: "25%" }}>Product</th>
                  <th style={{ width: "20%" }}>Price</th>
                  <th style={{ width: "15%" }}>Quantity</th>
                  <th style={{ width: "25%" }}>Total</th>
                  <th style={{ width: "25%" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((cart) => (
                  <React.Fragment key={cart._id}>
                    {cart.items.map((item) => (
                      <tr key={item._id}>
                        <td>
                          <img
                            src={item.image}
                            alt={item.productName}
                            style={{ width: "100px", height: "auto" }}
                          />
                        </td>
                        <td>{item.productName}</td>
                        <td>${item.price}</td>
                        <td>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item._id, e.target.value)
                            }
                            min="1"
                          />
                        </td>
                        <td>${item.price * item.quantity}</td>
                        <td>
                          <button
                            onClick={() => handleDeleteItem(item._id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <div className="float-right text-right">
        <h4>Subtotal:</h4>
        <h1>${calculateSubtotal(cartData)}</h1>
      </div>

      <div className="row mt-4 d-flex align-items-center">
        <div className="col-sm-6 order-md-2 text-right">
          <a
            href={process.env.PUBLIC_URL + "/catalog.html"}
            className="btn btn-primary mb-4 btn-lg pl-5 pr-5"
          >
            Checkout
          </a>
        </div>
        <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
          <a href={"/listproduct"}>
            <i className="fas fa-arrow-left mr-2"></i> Continue Shopping
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Cart_Shop;
