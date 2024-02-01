import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import notF from "../assets/images/404.png";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          className="d-flex justify-content-center "
          style={{ marginTop: "300px" }}
        >
          <img src={notF} alt="notF" />
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <Button className="btn btn-secondary">
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              Back To Home
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
