import React from "react";
import "../style/Navbar.css";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import NavbarData from "../data/NavbarData";
import { Link } from 'react-router-dom';

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
        <div className="user-account" style={{height:"38px", width:"111px", marginRight:"9px"}}>
          <BiUser className="user-icon" />
          <ul className="table-content">
            <li className="list">
              <Link
                  to="/Login"
                > Login
                </Link></li>
            <li className="list" style={{marginTop: "8px", backgroundColor: "#efefef", color: "black"}}>
            <Link
                  to="/Signup"
                > Signup
                </Link>
            </li>
          </ul>
        </div>

        <div className="cart">
          <BsHandbag className="cart-bag" />
          <div className="num-item">
            <div className="text-num">{countCartItem}</div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        {NavbarData.map((item, index) => {
          return (
            <div key={index} className="sub-nav">
              <a href={item.path} className="link-page">
                {item.title}
              </a>
            </div>
          );
        })}
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
