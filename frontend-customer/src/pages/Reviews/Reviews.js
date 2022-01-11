import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
function Reviews() {
  return (
    <>
      <div style={{ margin: "13px 50px" }}>
        <div className="top-section">
          <div style={{ display: "flex" }}>
            <div className="img-customer"></div>
            <div className="name-time">
              <div>
                <p>Grace Quintine</p>
              </div>
              <div>
                <span>3 month ago</span>
              </div>
            </div>
          </div>
          <div className="star-rating">
            {[...Array(5)].map((star, i) => {
              return (
                <label style={{ backgroundColor: "#fff" }}>
                  <FaStar color={"#ffc107"} size={19} className="star" />
                </label>
              );
            })}
          </div>
        </div>
        <div className="body-section">
          <label>Best Product</label>
          <p>Well made...</p>
          <p>I never try this product before</p>
        </div>
        <div className="bottom-section">
          <div>
            <p>Was this reviews helpful</p>
          </div>

          <div className="icon-like">
            <BiLike />
          </div>
          <div className="icon-dislike">
            <BiDislike />
          </div>
        </div>
        
      </div>
      <hr style={{ margin: "0px 50px" }} />
    </>
  );
}

export default Reviews;
