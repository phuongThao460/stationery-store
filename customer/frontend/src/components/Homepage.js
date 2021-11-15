//npm install --save styled-components
//npm install --save react-elastic-carousel
import React from "react";
import "../style/Homepage.css";
import Carousel from "react-elastic-carousel";

class Homepage extends React.Component {
  state = {
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 204, itemsToShow: 8 },
      { width: 768, itemsToShow: 5 },
      { width: 1200, itemsToShow: 6 },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="card-container">
          <Carousel breakPoints={this.state.breakPoints}>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "205px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">this is a price of product</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "205px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">this is a price of product</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "205px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">this is a price of product</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "205px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">this is a price of product</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "205px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">this is a price of product</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "205px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">this is a price of product</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "205px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">this is a price of product</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "205px" }}
                />
              </div>
              <div className="card-body">
                <div className="body-title">
                  Brustro Professional Pigment Based Fineliner - Set of 6
                  (Black)
                </div>
                <div className="body-price">this is a price of product</div>
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
      </div>
    );
  }
}

export default Homepage;
