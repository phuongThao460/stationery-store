import React from "react";
import "../style/Navbar.css";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import NavbarData from "../data/NavbarData";
import SubNav from "../data/SubNavbar";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";
function Navbar(props) {
  const { countCartItem } = props;
  const submit = (title) => {
    window.localStorage.setItem("itemTitle", title);
  };
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
      <div className="sub-menu">
        <div className="cover-menu">
          {SubNav.content1.map((item, index) => {
            return (
              <div
                key={index}
                className={item.cardContent}
                style={{
                  background: `url(${item.backgroundImg})`,
                  backgroundSize: item.backgroundSize,
                  marginTop: item.marginTop,
                }}
              >
                <div className="card-cover" style={{ top: item.top }}>
                  <div className="card-title">{item.title}</div>
                  <div className="card-text">{item.text}</div>
                  <button onClick={() => submit(item.title)}>
                    <Link to={"/item/" + item.title}>See more</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cover-menu">
          {SubNav.content2.map((item, index) => {
            return (
              <div
                key={index}
                className={item.cardContent}
                style={{
                  background: `url(${item.backgroundImg})`,
                  backgroundSize: item.backgroundSize,
                  marginTop: item.marginTop,
                }}
              >
                <div className="card-cover" style={{ top: item.top }}>
                  <div className="card-title">{item.title}</div>
                  <div className="card-text">{item.text}</div>
                  <button onClick={() => submit(item.title)}>
                    <Link to={"/item/" + item.title}>See more</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cover-menu">
          {SubNav.content3.map((item, index) => {
            return (
              <div
                key={index}
                className={item.cardContent}
                style={{
                  background: `url(${item.backgroundImg})`,
                  backgroundSize: item.backgroundSize,
                  marginTop: item.marginTop,
                }}
              >
                <div className="card-cover" style={{ top: item.top }}>
                  <div className="card-title">{item.title}</div>
                  <div className="card-text">{item.text}</div>
                  <button onClick={() => submit(item.title)}>
                    <Link to={"/item/" + item.title}>See more</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
