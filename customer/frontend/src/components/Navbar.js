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
      <div className="sub-menu">
        <div className="card-content-1" style={{background: `url('./images/notebook.jpg')`, backgroundSize: "cover"}}>
          <div className="card-title">NoteBook</div>
          <div className="card-text">how do you do</div>
        </div>
        <div style={{ flexDirection: "column" }}>
          <div className="card-content-2" style={{background: `url('./images/pen.jpg')`, backgroundSize: "cover"}}>
            <div className="card-title">Pen</div>
            <div className="card-text"></div>
          </div>
          <div className="card-content-2" style={{background: `url('./images/giftwrap.jpg')`, backgroundSize: "cover", marginTop: "9px" }}>
            <div className="card-title">Gift</div>
            <div className="card-text"></div>
          </div>
        </div>

        <div style={{ flexDirection: "column" }}>
          <div className="card-content-3" style={{background: `url('./images/a.png')`, backgroundSize: "cover"}}>
            <div className="card-title">Sketchbook</div>
            <div className="card-text"></div>
          </div>
          <div className="card-content-3" style={{background: `url('./images/aaaaaaa.jpg')`, backgroundSize: "cover", marginTop: "9px" }}>
            <div className="card-title">Calendar</div>
            <div className="card-text"></div>
          </div>
        </div>
      </div>
      <div className="padding-space" style={{ height: "500px" }}></div>
    </div>
  );
}

export default Navbar;
