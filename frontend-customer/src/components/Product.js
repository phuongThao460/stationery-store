/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import { IoMdRemove } from "react-icons/io";
// import { GrAdd } from "react-icons/gr";
import { BsHandbagFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "../style/Product.css";
import { AiFillStar } from "react-icons/ai";

import { useState, useEffect } from "react";
//import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { getProductDetails } from "../redux/action/productAction";
import { addToCart } from "../redux/action/cartAction";

const Product = ({ match, history }) => {
  const [count, setQty] = useState(1);
  const dispatch = useDispatch();
  //let navigate = useNavigate();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    // if (product && match.params.id !== product._id) {
    //
    // }
    dispatch(getProductDetails(window.location.pathname.substring(10)));
    //console.log(productDetails)
  }, []);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, count, true));
    alert("Add to cart successfull!");
    //navigate(`/cart`);
  };

  return (
    <div className="Container-Product">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="Wrapper">
            <div className="ImgContainer">
              <img
                alt=""
                className="Image"
                src={process.env.PUBLIC_URL + "/so-tay-bia-da-cao-cap.jpg"}
              />
            </div>
            <div style={{ display: "inline-block" }}>
              <div
                className="infoContainer"
                style={{ maxWidth: "641px", position: "relative" }}
              >
                <h2 className="Title-Product">{product.ten_sp}</h2>
                <div className="stock">
                  {product.so_luong > 0 ? (
                    <span className="in-stock">IN STOCK</span>
                  ) : (
                    <span className="out-stock">OUT OF STOCK</span>
                  )}
                </div>
                <span className="Price">${product.gia_ban_hien_tai}</span>

                <p className="Desc">{product.mo_ta}</p>

                <div className="FilterContainer">
                  <div className="Filter">
                    <span className="FilterTitle">Color</span>
                    <div>
                      {product.mau_sac === undefined ||
                        product.mau_sac.map((mau) => (
                          <div
                            className="dot"
                            style={{ backgroundColor: mau }}
                          ></div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="AddContainer">
                <span className="FilterTitle">Qty</span>
                <select
                  value={count}
                  onChange={(e) => setQty(parseInt(e.target.value))}
                >
                  {[...Array(product.so_luong).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="btn">
                <button className="Button" onClick={addToCartHandler}>
                  <BsHandbagFill style={{ marginRight: "7px" }} />
                  ADD TO CART
                </button>
                <button className="Button">
                  <BsFillSuitHeartFill style={{ marginRight: "7px" }} />
                  ADD TO WISHLIST
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <hr style={{ margin: "0px 50px" }} />
      <div className="rating">
        <div className="card-rating">
          <span className="review-card">REVIEWS PRODUCT</span>
          <div className="card-body-rating">
            <div className="row">
              <div className="col-sm-4 text-center">
                <h2 className="text-warning mt-4 mb-2">
                  <b>
                    <span id="average_rating">4.8</span> / 5
                  </b>
                </h2>
                <div className="mb-3">
                  <AiFillStar size={20} color="#FFCC00" />
                  <AiFillStar size={20} color="#FFCC00" />
                  <AiFillStar size={20} color="#FFCC00" />
                  <AiFillStar size={20} color="#FFCC00" />
                  <AiFillStar size={20} color="#FFCC00" />
                </div>
                <h3>
                  <span id="total_review">0</span> Review
                </h3>
              </div>
              <div className="col-sm-4" style={{ marginTop: "40px" }}>
                <p className="progress-label">
                  <div
                    className="progress-label-left"
                    style={{ float: "left" }}
                  >
                    <b style={{ margin: "5px" }}>5 Star</b>
                  </div>
                  <div
                    className="progress-label-right"
                    style={{ float: "right" }}
                  >
                    (
                    <span id="total_five_star_review" style={{ margin: "5px" }}>
                      0
                    </span>
                    )
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "95%", borderRadius: "10px" }}
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      id="five_star_progress"
                    ></div>
                  </div>
                </p>
                <p className="progress-label">
                  <div
                    className="progress-label-left"
                    style={{ float: "left" }}
                  >
                    <b style={{ margin: "5px" }}>4 Star</b>
                  </div>
                  <div
                    className="progress-label-right"
                    style={{ float: "right" }}
                  >
                    (
                    <span id="total_four_star_review" style={{ margin: "5px" }}>
                      0
                    </span>
                    )
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "75%", borderRadius: "10px" }}
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      id="four_star_progress"
                    ></div>
                  </div>
                </p>
                <p className="progress-label">
                  <div
                    className="progress-label-left"
                    style={{ float: "left" }}
                  >
                    <b style={{ margin: "5px" }}>3 Star</b>
                  </div>
                  <div
                    className="progress-label-right"
                    style={{ float: "right" }}
                  >
                    (
                    <span id="total_four_star_review" style={{ margin: "5px" }}>
                      0
                    </span>
                    )
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "55%", borderRadius: "10px" }}
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      id="three_star_progress"
                    ></div>
                  </div>
                </p>
                <p className="progress-label">
                  <div
                    className="progress-label-left"
                    style={{ float: "left" }}
                  >
                    <b style={{ margin: "5px" }}>2 Star</b>
                  </div>
                  <div
                    className="progress-label-right"
                    style={{ float: "right" }}
                  >
                    (
                    <span id="total_four_star_review" style={{ margin: "5px" }}>
                      0
                    </span>
                    )
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "35%", borderRadius: "10px" }}
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      id="two_star_progress"
                    ></div>
                  </div>
                </p>
                <p className="progress-label">
                  <div
                    className="progress-label-left"
                    style={{ float: "left" }}
                  >
                    <b style={{ margin: "5px" }}>1 Star</b>
                  </div>
                  <div
                    className="progress-label-right"
                    style={{ float: "right" }}
                  >
                    (
                    <span id="total_four_star_review" style={{ margin: "5px" }}>
                      0
                    </span>
                    )
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "15%", borderRadius: "10px" }}
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      id="one_star_progress"
                    ></div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-feedback"></div>
      </div>
    </div>
  );
};
export default Product;
