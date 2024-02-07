import React from "react";
import { Container } from "react-bootstrap";
import { PersonFill, Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoooo.png";
const HeaderBar = () => {
  return (
    <Container fluid>
      <div class="grid mt-2 surface-ground">
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
        <div class="col-6">
          <div className="max-w-30rem">
            <div className="grid">
              <div className="col-3 flex align-items-center justify-content-center">
                <h3>PAGES</h3>
              </div>
              <div className="col-3 flex align-items-center justify-content-center">
                <h3>PROMOTION</h3>
              </div>
              <div className="col-3 flex align-items-center justify-content-center">
                <h3>BLOG</h3>
              </div>
              <div className="col-3 flex align-items-center justify-content-center">
                <h3>CONTACT</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div className="grid justify-content-end m-5">
            <div className="ml-5">
              <Search size={25} />
            </div>
            <div className="ml-5">
              <PersonFill size={25} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeaderBar;
