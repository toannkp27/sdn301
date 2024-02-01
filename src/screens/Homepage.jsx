import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import BannerComponent from "../components/BannerComponent";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";
import banner5 from "../assets/images/Black-Friday-Facebook-cover-Banner-07.jpg";
import filter1 from "../assets/images/filterMan.jpg";
import filter2 from "../assets/images/filterWoman.jpg";
import filter3 from "../assets/images/filterKid.jpg";
import shoe from "../assets/images/z4998921239665_57d2527a702bef236df303bacb0939d9-300x300.jpg";
import blog from "../assets/images/blog.jpg";
import "../styles/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Container fluid style={{ paddingTop: "96px", marginRight: "0" }}>
      <BannerComponent
        arrImages={[banner3, banner4, banner5, banner2, banner1]}
      />
      <Container>
        <Row
          className="d-flex justify-content-between pt-5 "
          style={{ margin: 0 }}
        >
          <div style={{ position: "relative", width: "33%" }}>
            <Image
              src={filter1}
              style={{ objectFit: "contain", height: "250px" }}
              alt="filter"
            />
            <button
              style={{
                position: "absolute",
                top: "40%",
                left: "30%",
                padding: "0.3em 1.5em",
                fontSize: "1.3em",
                border: "none",
                cursor: "pointer",
              }}
            >
              <h4>
                <a
                  href="./listP"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  MEN'S
                </a>
              </h4>
            </button>
          </div>
          <div style={{ position: "relative", width: "33%" }}>
            <Image
              src={filter2}
              style={{ objectFit: "contain", height: "250px" }}
              alt="filter"
            />
            <button
              style={{
                position: "absolute",
                top: "40%",
                left: "30%",
                padding: "0.3em 1.5em",
                fontSize: "1.3em",
                border: "none",
                cursor: "pointer",
              }}
            >
              <h4>
                <a
                  href="./listP"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  WOMEN'S
                </a>
              </h4>
            </button>
          </div>
          <div style={{ position: "relative", width: "33%" }}>
            <Image
              src={filter3}
              style={{ objectFit: "cover", height: "250px", width: "377px" }}
              alt="filter"
            />
            <button
              style={{
                position: "absolute",
                top: "40%",
                left: "30%",
                padding: "0.3em 2em",
                fontSize: "1.3em",
                border: "none",
                cursor: "pointer",
              }}
            >
              <h4>
                <a
                  href="./listP"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  KID'S
                </a>
              </h4>
            </button>
          </div>
        </Row>
        <Row className="pt-5 pb-5">
          <h1 className="text-center">New Product</h1>
          <Row>
            <Col md={3}>
              <Link to={"/detail"} style={{ textDecoration: "none" }}>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={shoe}
                    class="card-img-top"
                    alt="../assets/images/"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{ fontSize: "1.5rem", textAlign: "center" }}
                    >
                      Adidas 8681 Shoe Shoe
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={3}>
              <Link to={"/detail"} style={{ textDecoration: "none" }}>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={shoe}
                    class="card-img-top"
                    alt="../assets/images/"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{ fontSize: "1.5rem", textAlign: "center" }}
                    >
                      Adidas 8681 Shoe Shoe
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={3}>
              <Link to={"/detail"} style={{ textDecoration: "none" }}>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={shoe}
                    class="card-img-top"
                    alt="../assets/images/"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{ fontSize: "1.5rem", textAlign: "center" }}
                    >
                      Adidas 8681 Shoe Shoe
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={3}>
              <Link to={"/detail"} style={{ textDecoration: "none" }}>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={shoe}
                    class="card-img-top"
                    alt="../assets/images/"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{ fontSize: "1.5rem", textAlign: "center" }}
                    >
                      Adidas 8681 Shoe Shoe
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Row>
        <Row className="pt-5 pb-5">
          <h1 className="text-center">Best Product</h1>
          <Row>
            <Col md={3}>
              <Link to={"/detail"} style={{ textDecoration: "none" }}>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={shoe}
                    class="card-img-top"
                    alt="../assets/images/"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{ fontSize: "1.5rem", textAlign: "center" }}
                    >
                      Adidas 8681 Shoe Shoe
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={3}>
              <Link to={"/detail"} style={{ textDecoration: "none" }}>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={shoe}
                    class="card-img-top"
                    alt="../assets/images/"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{ fontSize: "1.5rem", textAlign: "center" }}
                    >
                      Adidas 8681 Shoe Shoe
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={3}>
              <Link to={"/detail"} style={{ textDecoration: "none" }}>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={shoe}
                    class="card-img-top"
                    alt="../assets/images/"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{ fontSize: "1.5rem", textAlign: "center" }}
                    >
                      Adidas 8681 Shoe Shoe
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={3}>
              <Link to={"/detail"} style={{ textDecoration: "none" }}>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={shoe}
                    class="card-img-top"
                    alt="../assets/images/"
                  />
                  <div class="card-body">
                    <p
                      class="card-text"
                      style={{ fontSize: "1.5rem", textAlign: "center" }}
                    >
                      Adidas 8681 Shoe Shoe
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Row>
        <Row
          className="d-flex justify-content-between pt-5 pb-5"
          style={{ margin: 0 }}
        >
          <h1 className="text-center">Blogs</h1>
          <div style={{ position: "relative", width: "33%" }}>
            <Image
              src={blog}
              style={{ objectFit: "contain", height: "250px" }}
              alt="filter"
              className="img_blog"
            />
            <div
              className="content_blog"
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "#F7F9F9",
                position: "absolute",
                top: "10%",
                left: "12%",
                fontSize: "1.3em",
                border: "none",
                opacity: "0.9",
              }}
            >
              <h3 className="text-center pt-3">Never Done Skateboarding</h3>
              <p className="text-center pt-1">BY ADMIN | DEC 01, 2017</p>
              <a href="/blog" style={{ color: "red" }}>
                <p className="text-center">Read more</p>
              </a>
            </div>
          </div>
          <div style={{ position: "relative", width: "33%" }}>
            <Image
              src={blog}
              style={{ objectFit: "contain", height: "250px" }}
              alt="filter"
              className="img_blog"
            />
            <div
              className="content_blog"
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "#F7F9F9",
                position: "absolute",
                top: "10%",
                left: "12%",
                fontSize: "1.3em",
                border: "none",
                opacity: "0.9",
              }}
            >
              <h3 className="text-center pt-3">Never Done Skateboarding</h3>
              <p className="text-center pt-1">BY ADMIN | DEC 01, 2017</p>
              <a href="/blog" style={{ color: "red" }}>
                <p className="text-center">Read more</p>
              </a>
            </div>
          </div>
          <div style={{ position: "relative", width: "33%" }}>
            <Image
              src={blog}
              style={{ objectFit: "contain", height: "250px" }}
              alt="filter"
              className="img_blog"
            />
            <div
              className="content_blog"
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "#F7F9F9",
                position: "absolute",
                top: "10%",
                left: "12%",
                fontSize: "1.3em",
                border: "none",
                opacity: "0.9",
              }}
            >
              <h3 className="text-center pt-3">Never Done Skateboarding</h3>
              <p className="text-center pt-1">BY ADMIN | DEC 01, 2017</p>
              <a href="/blog" style={{ color: "red" }}>
                <p className="text-center">Read more</p>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Homepage;
