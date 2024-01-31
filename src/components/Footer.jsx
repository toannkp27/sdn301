import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col col={3}>
          <Row>LOGOSHOP</Row>
          <Row>Hotline:022222222</Row>
          <Row>StoreAddress:HaNoi</Row>
        </Col>
        <Col col={3}>
          <Row>
            <b>Help</b>
          </Row>
          <Row>Contact Us</Row>
          <Row>Payment Option</Row>
        </Col>
        <Col col={3}>
          <Row>
            <b>Company</b>
          </Row>
          <Row>About Us</Row>
          <Row></Row>
        </Col>
        <Col col={3}>
          <Row>
            <b>Fanpage</b>
          </Row>
          <Row>Bo link fb vao day</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
