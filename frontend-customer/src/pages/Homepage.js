/* eslint-disable react/no-direct-mutation-state */
//npm install --save styled-components
//npm install --save react-elastic-carousel
import React from "react";
import "../style/Homepage.css";
import Carousel from "react-elastic-carousel";
import SubNav from "../data/SubNavbar";
import { Link } from "react-router-dom";
import axios from "axios";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      idPro: 0,
      lstProduct: [],
      breakPoints: [
        { width: 1, itemsToShow: 1 },
        { width: 204, itemsToShow: 8 },
        { width: 768, itemsToShow: 5 },
        { width: 1200, itemsToShow: 6 },
      ],
    };
    this.getListProduct();
  }
  getListProduct = () => {
    axios.get("http://localhost:8000/san_pham/").then((res) => {
      const array = [];
      res.data.forEach((element) => {
        array.push({
          id: element._id,
          name: element.ten_sp,
          price: element.gia_ban_hien_tai,
        });
      });
      this.state.lstProduct = array.reverse();
      this.setState(this);
    });
  };
  submit = (title) => {
    window.localStorage.setItem("itemTitle", title);
  };
  render() {
    return (
      <div className="container">
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
                    <button
                      onClick={() => this.submit(item.title)}
                      className="btn-submit"
                    >
                      <Link
                        to={"/item/" + item.title}
                        style={{ color: "#D16325" }}
                      >
                        See more
                      </Link>
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
                    <button
                      onClick={() => this.submit(item.title)}
                      className="btn-submit"
                    >
                      <Link
                        to={"/item/" + item.title}
                        style={{ color: "#D16325" }}
                      >
                        See more
                      </Link>
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
                    <button
                      onClick={() => this.submit(item.title)}
                      className="btn-submit"
                    >
                      <Link
                        to={"/item/" + item.title}
                        style={{ color: "#D16325" }}
                      >
                        See more
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Home-Title">
          <h1 className="title-home-body">New Arrival</h1>
        </div>

        <div className="card-container">
          <Carousel itemsToShow={9} breakPoints={this.state.breakPoints}>
            {this.state.lstProduct.map((item, index) => (
              <div className="card" key={index} value={item.id}>
                <div className="card-img">
                  <Link to={"/products/" + item.id}>
                    <img
                      src="./images/BUT- BI.jpg"
                      alt=""
                      style={{ width: "204px", height: "185px" }}
                    />
                  </Link>
                </div>
                <Link to={"/products/" + item.id} style={{textDecoration: "none", color: "black", fontWeight: "400"}}>
                  <div className="card-body">
                    <div className="body-title">{item.name}</div>
                    <div className="body-price">$ {item.price}</div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="card">
              <div className="card-body">
                <div className="body-title">
                  <a href="/#">See more</a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="Home-Title">
          <h1 className="title-home-body">Special Sale 50% Off</h1>
        </div>
        <div className="card-container">
          <Carousel itemsToShow={9} breakPoints={this.state.breakPoints}>
            {this.state.lstProduct.map((item, index) => (
              <div className="card" key={index} value={item.id}>
                <div className="card-img">
                  <Link to={"/products/" + item.id}>
                    <img
                      src="./images/BUT- BI.jpg"
                      alt=""
                      style={{ width: "204px", height: "185px" }}
                    />
                  </Link>
                </div>
                <Link to={"/products/" + item.id}  style={{textDecoration: "none", color: "black", fontWeight: "400"}}>
                  <div className="card-body">
                    <div className="body-title">{item.name}</div>
                    <div className="body-price">$ {item.price}</div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="card">
              <div className="card-body">
                <div className="body-title">
                  <a href="/#">See more</a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div
          className="footer"
          style={{ height: "50vh", backgroundColor: "antiquewhite" }}
        ></div>
      </div>
    );
  }
}

export default Homepage;
