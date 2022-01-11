import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
function Reviews({ feedback }) {
  return (
    <>
      {feedback.map((item) => (
        <>
          <div style={{ margin: "13px 50px" }}>
            <div className="top-section">
              <div style={{ display: "flex" }}>
                <div className="img-customer"></div>
                <div className="name-time">
                  <div>
                    <p>{item.id_tkkh.id_ttkh.ten_kh}</p>
                  </div>
                  <div>
                    <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="star-rating">
                {[...Array(item.so_sao_danh_gia)].map((star, i) => {
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
              <p>{item.noi_dung_danh_gia}</p>
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
      ))}
    </>
  );
}

export default Reviews;
