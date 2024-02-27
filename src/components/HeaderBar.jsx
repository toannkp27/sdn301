import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoooo.png";
import MenuBar from "./MenuBar";
const HeaderBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
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
        <div class="col-9">
          <MenuBar />
        </div>
      </div>
    </Container>
  );
};

export default HeaderBar;
