//npm install --save styled-components
//npm install --save react-elastic-carousel
import React from "react";
import "../style/Homepage.css";
import Carousel from "react-elastic-carousel";
import SubNav from "../data/SubNavbar";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  state = {
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 204, itemsToShow: 8 },
      { width: 768, itemsToShow: 5 },
      { width: 1200, itemsToShow: 6 },
    ],
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
        <h1>New Arrival</h1>
        <div className="card-container">
          <Carousel itemsToShow={9} breakPoints={this.state.breakPoints}>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">999.999 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="body-title">
                  <a href="/#">See more</a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <h1 style={{ marginTop: "0px" }}>Sale 50% Off For All Products</h1>
        <div className="card-container">
          <Carousel itemsToShow={9} breakPoints={this.state.breakPoints}>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">999.999 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">120.000 Đ</div>
              </div>
            </div>
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
