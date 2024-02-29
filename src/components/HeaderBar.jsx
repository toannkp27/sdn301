import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Search, PersonFill, Cart4 } from "react-bootstrap-icons";
import logo from "../assets/images/logoooo.png";
import { Link } from "react-router-dom";
const HeaderBar = () => {
  return (
    <Container fluid>
      <Row
        className="py-2 "
        style={{
          backgroundColor: "white",
          padding: "15px" /* Khoảng cách giữa nội dung và viền của header */,
          textAlign: "center",
          width: "100%",
          position: "fixed" /* Đặt header ở vị trí cố định */,
          top: "0" /* Đặt header ở đỉnh của trang */,
          zIndex: "1000",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.1)" /* Thêm box shadow dưới header */,
        }}
      >
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center  "
        >
          <Link to={"/"}>
            <img
              src={logo}
              height={80}
              alt="logo"
              style={{ objectFit: "contain" }}
            />
          </Link>
        </Col>
        <Col md={4} className="d-flex  align-items-center">
          <Row>
            <Col md={3}>
              <h6>PAGES</h6>
            </Col>
            <Col md={3} className="px-5">
              <h6>PROMOTION</h6>
            </Col>
            <Col md={3} className="px-5">
              <h6>BLOG</h6>
            </Col>
            <Col md={3}>
              <h6>CONTACT</h6>
            </Col>
          </Row>
        </Col>
        <Col
          md={4}
          className="d-flex justify-content-end align-items-center pe-5"
        >
          <Row>
            <Col md={4}>
              <Search size={25} />
            </Col>
            <Col md={4}>
              <Link to={"/login"}>
                <PersonFill size={25} />
              </Link>
            </Col>
            <Col md={4}>
              <Cart4 size={25} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderBar;
