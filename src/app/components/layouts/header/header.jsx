import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from "reactstrap";
import style from "./header.module.scss";

import { FaBook, FaShoppingCart } from "react-icons/fa";

const Header = ({ totalPrice, totalItems }) => {
  return (
    <Navbar className={style.wrapper} color="light" expand="md" light>
      <Link to="/">
        <NavbarBrand>
          <FaBook /> Books shop
        </NavbarBrand>
      </Link>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="me-auto" navbar></Nav>
        <Link className={`${style.cart} btn btn-primary`} to="/cart">
          Price: {totalPrice} Total: {totalItems}
          <span>
            <FaShoppingCart />
          </span>
        </Link>
      </Collapse>
    </Navbar>
  );
};

export default Header;
