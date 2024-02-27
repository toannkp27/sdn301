import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoooo.png";

const Footer = () => {
  return (
    <Container fluid>
      <div class="grid mt-2 surface-ground p-3 surface-0 shadow-2">
        <div class="col-3 flex align-items-center justify-content-center">
          <Link to={"/"}>
            <img
              src={logo}
              height={80}
              alt="logo"
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
        <div class="col-3">
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
        </div>
        <div class="col-3">
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
        </div>
        <div class="col-3">
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
        </div>
      </div>
    </Container>
  );
};

export default Footer;
