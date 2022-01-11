//eslint-disable-next-line
import React, { useRef } from "react";
import "../style/Navbar.css";
import { BsSearch, BsHandbag, BsGift, BsStar } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import NavbarData from "../data/NavbarData";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Notify from "react-notification-alert";
import "react-notification-alert/dist/animate.css";
import axios from "axios";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const customerInfo = JSON.parse(
    window.sessionStorage.getItem("customer-account")
  );
  const { cartItems } = cart;
  let navigate = useNavigate();
  const getCartCount = () => {
    return cartItems.reduce((count, item) => Number(item.count) + count, 0);
  };

  let notify = useRef();
  var login_notify = {
    place: "tc",
    message: <div>Please login to use this feature</div>,
    type: "danger",
    icon: "fas fa-times",
    autoDismiss: 3,
    closeButton: false,
  };

  const clickVoucherIcon = () => {
    var id_account = sessionStorage.getItem("id_account");
    if (id_account != null) {
      window.location.href = "/profile/vouchers";
    } else {
      notify.current.notificationAlert(login_notify);
    }
  };

  const getVoucherCount = () => {
    var id_account = sessionStorage.getItem("id_account");
    if (id_account != null) {
      axios.post(
        "https://stationery-store-tmdt.herokuapp.com/tkkh/voucher_count",
        {
          id_tkkh: id_account,
        }
      );
    } else {
      return 0;
    }
  };

  const clickFeedBackIcon = () => {
    var id_account = sessionStorage.getItem("id_account");
    if (id_account != null) {
      window.location.href = "/profile/feedback";
    } else {
      notify.current.notificationAlert(login_notify);
    }
  };

  const getFeedBackCount = () => {
    var id_account = sessionStorage.getItem("id_account");
    if (id_account != null) {
      axios.post(
        "https://stationery-store-tmdt.herokuapp.com/tkkh/feedback_count",
        {
          id_tkkh: id_account,
        }
      );
    } else {
      return 0;
    }
  };

  const logout = () => {
    window.sessionStorage.removeItem("customer-account");
    window.sessionStorage.removeItem("id_account");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="container-1">
      <div>
        <Notify ref={notify} />
      </div>
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
          <div className="user-name">
            <span style={{ fontSize: "20px" }}>{customerInfo.ten_kh}</span>
            <ul className="table-content">
              <li className="list">
                <Link
                  to="/profile/account"
                  style={{ color: "white" }}
                  className="list-link"
                >
                  {" "}
                  Profile
                </Link>
              </li>
              <li
                className="list"
                style={{ marginTop: "8px", backgroundColor: "#efefef" }}
              >
                <button onClick={logout} className="btn-logout">
                  Logout
                </button>
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
                <Link
                  to="/login"
                  style={{ color: "white" }}
                  className="list-link"
                >
                  Login
                </Link>
              </li>
              <li
                className="list"
                style={{ marginTop: "8px", backgroundColor: "#efefef" }}
              >
                <Link
                  to="/Signup"
                  style={{ color: "black" }}
                  className="list-link"
                >
                  {" "}
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div className="feedback">
          <button onClick={clickFeedBackIcon} className="button-feedback">
            <BsStar className="feedback-icon" />
            <div className="num-item">
              <div className="text-num">{getFeedBackCount()}</div>
            </div>
          </button>
        </div>

        <div className="voucher">
          <button onClick={clickVoucherIcon} className="button-voucher">
            <BsGift className="voucher-icon" />
            <div className="num-item">
              <div className="text-num">{getVoucherCount()}</div>
            </div>
          </button>
        </div>

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
              <Link to={item.path} className="link-page">
                {item.title}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
