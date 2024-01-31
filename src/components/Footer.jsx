import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/images/logoooo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "#F2F2F2", paddingTop: "2rem" }}>
        <Col md={3}>
          <Row className="text-center">
            <Link to={"/"}>
              <img
                src={logo}
                height={100}
                alt="logo"
                style={{ objectFit: "contain" }}
              />
            </Link>
          </Row>
          <h5 className="text-center pt-5">Hotline: 022222222</h5>
          <h5 className="text-center">StoreAddress: HaNoi</h5>
        </Col>
        <Col md={3}>
          <Row>
            <h3>Help</h3>
          </Row>
          <Row>
            <a
              href="./contact"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.2rem",
              }}
            >
              Contact Us
            </a>
          </Row>
          <a
            href="./payment"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.2rem",
            }}
          >
            Payment Option
          </a>
        </Col>
        <Col md={3}>
          <Row>
            <h3>Company</h3>
          </Row>
          <Row>
            <a
              href="./contact"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.2rem",
              }}
            >
              Contact Us
            </a>
          </Row>
        </Col>
        <Col md={3}>
          <Row>
            <h3>Fanpage</h3>
          </Row>
          <Row>
            <a
              href="./contact"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.2rem",
              }}
            >
              FB LINK
            </a>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
