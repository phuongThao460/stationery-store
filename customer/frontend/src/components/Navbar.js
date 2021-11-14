import React from "react";
import "../style/Navbar.css";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

function Navbar(props) {
  const { countCartItem } = props;
  return (
    <div className="container-1">
      <div className="navbar-1">
        <form className="header-1">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <BsSearch id="input-img" />
        </form>

        <BiUser className="user-account" />
        <div className="cart">
          <BsHandbag className="cart-bag" />
          <div className="num-item">
            <div className="text-num">{countCartItem}</div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="sub-nav">
          <a href="/#" className="link-page">
            Home
          </a>
        </div>
        <div className="sub-nav">
          <a href="/#" className="link-page">
            Office & School
          </a>
        </div>
        <div className="sub-nav">
          <a href="/#" className="link-page">
            Design & Fun
          </a>
        </div>
        <div className="sub-nav">
          <a href="/#" className="link-page">
            Accessories
          </a>
        </div>
        <div className="sub-nav">
          <a href="/#" className="link-page">
            Souvenir
          </a>
        </div>
        <div className="sub-nav">
          <a href="/#" className="link-page">
            About
          </a>
        </div>
      </nav>
      <div className="banner">
        <img
          src="./images/banner-1.jpg"
          alt="sale-off"
          className="banner-pic"
        />
      </div>
    </div>
  );
}

export default Navbar;
