import React from "react";
import "../styles/ListProduct.css";
import {
  Col,
  Container,
  FormCheck,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import DefaultLayout from "../layout/DefaultLayout";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import shoe from "../assets/images/z4998921239665_57d2527a702bef236df303bacb0939d9-300x300.jpg";

const ListProduct = () => {
  return (
    <DefaultLayout>
      <Container style={{ paddingTop: "113px" }}>
        <Row>
          <Col md={3}>
            <Row>
              <h4 className="pb-2">Gender</h4>
              <FormGroup>
                <FormCheck
                  id="male"
                  style={{ display: "inline-block" }}
                ></FormCheck>
                <FormLabel htmlFor="male" className="ps-2 fs-5">
                  Male
                </FormLabel>
              </FormGroup>
              <FormGroup>
                <FormCheck
                  id="female"
                  style={{ display: "inline-block" }}
                ></FormCheck>
                <FormLabel htmlFor="female" className="ps-2 fs-5">
                  Female
                </FormLabel>
              </FormGroup>
              <FormGroup>
                <FormCheck
                  id="kid"
                  style={{ display: "inline-block" }}
                ></FormCheck>
                <FormLabel htmlFor="kid" className="ps-2 fs-5">
                  Kid
                </FormLabel>
              </FormGroup>
            </Row>
            <hr
              className="my-4"
              style={{ borderColor: "gray", width: "80%" }}
            />
            <Row>
              <h4 className="pb-2">Price</h4>
              <FormGroup>
                <FormCheck
                  id="p1"
                  style={{ display: "inline-block" }}
                ></FormCheck>
                <FormLabel htmlFor="p1" className="ps-2 fs-5">
                  $50-$100
                </FormLabel>
              </FormGroup>
              <FormGroup>
                <FormCheck
                  id="p2"
                  style={{ display: "inline-block" }}
                ></FormCheck>
                <FormLabel htmlFor="p2" className="ps-2 fs-5">
                  $100-$200
                </FormLabel>
              </FormGroup>
              <FormGroup>
                <FormCheck
                  id="p3"
                  style={{ display: "inline-block" }}
                ></FormCheck>
                <FormLabel htmlFor="p3" className="ps-2 fs-5">
                  $200-$300
                </FormLabel>
              </FormGroup>
            </Row>
            <hr
              className="my-4"
              style={{ borderColor: "gray", width: "80%" }}
            />

            <Row>
              <h4 className="pb-2">Size</h4>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <FormCheck
                      id="s1"
                      style={{ display: "inline-block" }}
                    ></FormCheck>
                    <FormLabel htmlFor="s1" className="ps-2 fs-5">
                      40
                    </FormLabel>
                  </FormGroup>
                  <FormGroup>
                    <FormCheck
                      id="s2"
                      style={{ display: "inline-block" }}
                    ></FormCheck>
                    <FormLabel htmlFor="s2" className="ps-2 fs-5">
                      41
                    </FormLabel>
                  </FormGroup>
                  <FormGroup>
                    <FormCheck
                      id="s3"
                      style={{ display: "inline-block" }}
                    ></FormCheck>
                    <FormLabel htmlFor="s3" className="ps-2 fs-5">
                      42
                    </FormLabel>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <FormCheck
                      id="s4"
                      style={{ display: "inline-block" }}
                    ></FormCheck>
                    <FormLabel htmlFor="s4" className="ps-2 fs-5">
                      43
                    </FormLabel>
                  </FormGroup>
                  <FormGroup>
                    <FormCheck
                      id="s5"
                      style={{ display: "inline-block" }}
                    ></FormCheck>
                    <FormLabel htmlFor="s5" className="ps-2 fs-5">
                      44
                    </FormLabel>
                  </FormGroup>
                  <FormGroup>
                    <FormCheck
                      id="s6"
                      style={{ display: "inline-block" }}
                    ></FormCheck>
                    <FormLabel htmlFor="s6" className="ps-2 fs-5">
                      45
                    </FormLabel>
                  </FormGroup>
                </Col>
              </Row>
            </Row>
            <hr
              className="my-4"
              style={{ borderColor: "gray", width: "80%" }}
            />
            <Row>
              <h4 className="pb-2 ">Brand</h4>
              <FormGroup>
                <FormCheck
                  id="n"
                  style={{ display: "inline-block" }}
                ></FormCheck>
                <FormLabel htmlFor="n" className="ps-2 fs-5">
                  NIKE
                </FormLabel>
              </FormGroup>
              <FormGroup>
                <FormCheck
                  id="a"
                  style={{ display: "inline-block" }}
                ></FormCheck>
                <FormLabel htmlFor="a" className="ps-2 fs-5">
                  ADIDAS
                </FormLabel>
              </FormGroup>
              <FormGroup>
                <FormCheck
                  id="c"
                  style={{ display: "inline-block" }}
                ></FormCheck>
                <FormLabel htmlFor="c" className="ps-2 fs-5">
                  CONVERSE
                </FormLabel>
              </FormGroup>
              <FormGroup>
                <FormCheck
                  id="v"
                  style={{ display: "inline-block" }}
                ></FormCheck>
                <FormLabel htmlFor="v" className="ps-2 fs-5">
                  VANS
                </FormLabel>
              </FormGroup>
            </Row>
            <hr
              className="my-4"
              style={{ borderColor: "gray", width: "80%" }}
            />
          </Col>
          <Col md={9}>
            <Row>
              <Col md={4}>
                <select name="Sort" id="" style={{ padding: "10px" }}>
                  <option value="df">Default Sort</option>
                  <option value="giamdan">
                    <ArrowDown />
                  </option>
                  <option value="tangdan">
                    <ArrowUp />
                  </option>
                </select>
              </Col>
            </Row>
            <Row className="d-flex justify-content-between pt-5 pb-5">
              <Row>
                <Col md={3}>
                  <div class="card">
                    <img
                      src={shoe}
                      class="card-img-top"
                      alt="../assets/images/"
                    />
                    <div class="card-body">
                      <p class="card-text" style={{ textAlign: "center" }}>
                        Adidas 8681 Shoe Shoe
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div class="card">
                    <img
                      src={shoe}
                      class="card-img-top"
                      alt="../assets/images/"
                    />
                    <div class="card-body">
                      <p class="card-text" style={{ textAlign: "center" }}>
                        Adidas 8681 Shoe Shoe
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div class="card">
                    <img
                      src={shoe}
                      class="card-img-top"
                      alt="../assets/images/"
                    />
                    <div class="card-body">
                      <p class="card-text" style={{ textAlign: "center" }}>
                        Adidas 8681 Shoe Shoe
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div class="card">
                    <img
                      src={shoe}
                      class="card-img-top"
                      alt="../assets/images/"
                    />
                    <div class="card-body">
                      <p class="card-text" style={{ textAlign: "center" }}>
                        Adidas 8681 Shoe Shoe
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div class="card">
                    <img
                      src={shoe}
                      class="card-img-top"
                      alt="../assets/images/"
                    />
                    <div class="card-body">
                      <p class="card-text" style={{ textAlign: "center" }}>
                        Adidas 8681 Shoe Shoe
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div class="card">
                    <img
                      src={shoe}
                      class="card-img-top"
                      alt="../assets/images/"
                    />
                    <div class="card-body">
                      <p class="card-text" style={{ textAlign: "center" }}>
                        Adidas 8681 Shoe Shoe
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div class="card">
                    <img
                      src={shoe}
                      class="card-img-top"
                      alt="../assets/images/"
                    />
                    <div class="card-body">
                      <p class="card-text" style={{ textAlign: "center" }}>
                        Adidas 8681 Shoe Shoe
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div class="card">
                    <img
                      src={shoe}
                      class="card-img-top"
                      alt="../assets/images/"
                    />
                    <div class="card-body">
                      <p class="card-text" style={{ textAlign: "center" }}>
                        Adidas 8681 Shoe Shoe
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
export default ListProduct;
