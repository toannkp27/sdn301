import React from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";

const AddProduct = () => {
  return (
    <Container className="add-product">
      <Row>
        <h5>Add Product</h5>
        <p>Add your product for customer</p>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={5} className="product-info">
          <h6>Basic Information</h6>
          <Row className="basic-infor">
            <Row>
              <p>Input your product name</p>
              <input type="text" placeholder="Product Name"></input>
            </Row>
            <Row>
              <p>Input Your Description Here</p>
              <textarea placeholder="Description"></textarea>
            </Row>
          </Row>
        </Col>

        <Col md={5} className="product-image">
          <h6>Product Image</h6>
          <Row className="product-image-item">
            <Row className="mb-3">
              <p>Image</p>
              <input type="number" placeholder="Product Image"></input>
            </Row>
          </Row>

          <Row className="mt-4">
            <h6>Brand</h6>
            <Row className="brand-item">
              <p>Product Brand</p>
              <div className="checkBrand m-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="brand"
                    value="nike"
                  />
                  <label className="form-check-label" htmlFor="Nike">
                    NIKE
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="brand"
                    value="vans"
                  />
                  <label className="form-check-label" htmlFor="vans">
                    VANS
                  </label>
                </div>
              </div>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-4">
        <Col md={5} className="product-price">
          <h6>Price</h6>
          <Row className="product-price-item">
            <Row className="mb-3">
              <p>Input Price</p>
              <input type="number" placeholder="Product Price"></input>
            </Row>
          </Row>
        </Col>
        <Col md={5} className="product-size">
          <h6>Select Size</h6>
          <Row className="product-size-item">
            <Row className="mb-3 ">
              <p>Add Size</p>
              <div className="product-size-item-content">
                <div className="form-check form-check-inline ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="size"
                    value="39"
                  />
                  <label className="form-check-label" htmlFor="39">
                    39
                  </label>
                </div>
                <div className="form-check form-check-inline ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="size"
                    value="40"
                  />
                  <label className="form-check-label" htmlFor="40">
                    40
                  </label>
                </div>
              </div>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className="text-center mt-4 mb-4">
        <Col>
          <Button className="btn btn-primary">ADD</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
