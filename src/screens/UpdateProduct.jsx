import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const UpdateProduct = () => {
  return (
    <Container>
        <h3 className="text-center">UPDATE SHOES</h3>
      <Row className="justify-content-center mb-4">
        <Col md={9}>
          <Row className="mb-3">
            <label htmlFor="shoesId">ShoesID:</label>
            <input type="text" id="shoesId" placeholder="ShoesID" />
          </Row>
          <Row className="mb-3">
            <label htmlFor="shoesName">ShoesName:</label>
            <input type="text" id="shoesName" placeholder="ShoesName" />
          </Row>
          <Row className="mb-3">
            <label htmlFor="shoesDescription">ShoesDescription:</label>
            <input
              type="text"
              id="shoesDescription"
              placeholder="ShoesDescription"
            />
          </Row>
          <Row className="mb-3">
            <label htmlFor="shoesPrice">ShoesPrice:</label>
            <input type="text" id="shoesPrice" placeholder="ShoesPrice" />
          </Row>
          <Row className="mb-3">
            <label htmlFor="shoesImage">ShoesImage:</label>
            <input type="text" id="shoesImage" placeholder="ShoesImage" />
          </Row>
          <Row className="mb-3">
            <label htmlFor="quantityInStock">Quantity in stock:</label>
            <input
              type="text"
              id="quantityInStock"
              placeholder="Quantity in stock"
            />
          </Row>
          <Row className="mb-3">
            <h5>Brand:</h5>
            <Table className="m-2">
              <tr>
                <td>
                  <input type="radio" name="brand" value="1" id="b1" />
                  <label for="b1">NIKE</label>
                </td>
                <td>
                  <input type="radio" name="brand" value="2" id="b2" />
                  <label for="b2">ADIDAS</label>
                </td>
                <td>
                  <input type="radio" name="brand" value="3" id="b3" />
                  <label for="b3">JORDAN</label>
                </td>
                <td>
                  <input type="radio" name="brand" value="4" id="b4" />
                  <label for="b4">YEEZY</label>
                </td>
                <td>
                  <input type="radio" name="brand" value="5" id="b5" />
                  <label for="b5">VANS</label>
                </td>
              </tr>
            </Table>
          </Row>
          <Row>
            <h5>Size:</h5>
            <div className="checkSize m-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="size"
                  id="36"
                  value="36"
                />
                <label className="form-check-label" htmlFor="36">
                  36
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="size"
                  id="37"
                  value="37"
                />
                <label className="form-check-label" htmlFor="37">
                  37
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="size"
                  id="38"
                  value="38"
                />
                <label className="form-check-label" htmlFor="38">
                  38
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="size"
                  id="39"
                  value="39"
                />
                <label className="form-check-label" htmlFor="39">
                  39
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="size"
                  id="40"
                  value="40"
                />
                <label className="form-check-label" htmlFor="40">
                  40
                </label>
              </div>
              <div className="text-center">
              <Button className="btn btn-primary">ADD</Button>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateProduct;
