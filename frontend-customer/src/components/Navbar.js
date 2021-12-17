//eslint-disable-next-line
import React from "react";
import "../style/Navbar.css";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import NavbarData from "../data/NavbarData";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const customerInfo = JSON.parse(window.localStorage.getItem("customer-account"));
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((count, item) => Number(item.count) + count, 0);
  };

  const logout = () => {
    window.localStorage.removeItem("customer-account");
    window.location.reload();
  }
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
        {customerInfo ? (
          <div className="user-name"><span style={{fontSize: "25px"}}>{customerInfo.ten_kh}</span>
            <ul className="table-content">
              <li className="list">
                <button onClick={logout} className="btn-logout">
                  Logout
                </button>
              </li>
              <li
                className="list"
                style={{ marginTop: "8px", backgroundColor: "#efefef" }}
              >
                <Link to="/profile/account" style={{ color: "black" }}  className="list-link">
                  {" "}
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div
            className="user-account"
            style={{ height: "38px", width: "111px", marginRight: "9px" }}
          >
            <BiUser className="user-icon" />
            <ul className="table-content">
              <li className="list">
                <Link to="/login" style={{ color: "white" }} className="list-link">
                  Login
                </Link>
              </li>
              <li
                className="list"
                style={{ marginTop: "8px", backgroundColor: "#efefef" }}
              >
                <Link to="/Signup" style={{ color: "black" }}  className="list-link">
                  {" "}
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div className="cart">
          <Link to="/Cart">
            <BsHandbag className="cart-bag" />
            <div className="num-item">
              <div className="text-num">{getCartCount()}</div>
            </div>
          </Link>
        </div>
      </div>
      <nav className="main-navbar">
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
    </div>
  );
};

export default Navbar;
