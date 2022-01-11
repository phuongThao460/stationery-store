/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BsHandbagFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "../style/Product.css";
import { AiFillStar, AiOutlineShareAlt } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
//import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../redux/action/productAction";
import { addToCart } from "../redux/action/cartAction";
import Notify from "react-notification-alert";
import "react-notification-alert/dist/animate.css";
import axios from "axios";
import Reviews from "../pages/Reviews/Reviews";
import Footer from "./Footer";

const Product = ({ match, history }) => {
  const [count, setQty] = useState(1);
  const [feedback, setFeedback] = useState([]);
  let err_notify = useRef();
  var options = {};
  options = {
    place: "tc",
    message: <div>Add to cart successfull!</div>,
    type: "success",
    icon: "far fa-check-circle",
    autoDismiss: 3,
    closeButton: false,
  };
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  // NOTIFY
  let notify = useRef();
  var not_login_option = {
    place: "tr",
    message: <div>You must login in order to add to wishlist</div>,
    type: "danger",
    icon: "fas fa-times",
    autoDismiss: 3,
    closeButton: false,
  };
  var duplicated_item_option = {
    place: "tr",
    message: <div>This product has been added to wishlist</div>,
    type: "danger",
    icon: "fas fa-times",
    autoDismiss: 3,
    closeButton: false,
  };
  var success_option = {
    place: "tr",
    message: <div>Added to wishlist successfully</div>,
    type: "success",
    icon: "fas fa-check-circle",
    autoDismiss: 3,
    closeButton: false,
  };
  useEffect(() => {
    axios.post(
      "https://stationery-store-tmdt.herokuapp.com/danh_gia/feedbacks_from_sp",
      { id_san_pham: window.location.pathname.substring(10) }
    ).then((res) => {setFeedback(res.data)});
  }, []);
  useEffect(() => {
    dispatch(getProductDetails(window.location.pathname.substring(10)));
  }, []);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, count, true));
    err_notify.current.notificationAlert(options);
  };

  const addWishList = () => {
    var id_tkkh = sessionStorage.getItem("id_account");

    // user didnt login
    if (id_tkkh === null) {
      notify.current.notificationAlert(not_login_option);
    } else {
      axios
        .post("https://stationery-store-tmdt.herokuapp.com/tkkh/add_wishlist", {
          id_sp: product._id,
          id_tkkh: id_tkkh,
        })
        .then((res) => {
          if (res.data === null) {
            notify.current.notificationAlert(duplicated_item_option);
          } else {
            notify.current.notificationAlert(success_option);
          }
        });
    }
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
            <div>
              <Notify ref={notify} />
            </div>
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
                  style={{ height: "36px", marginTop: "7px" }}
                  onChange={(e) => setQty(parseInt(e.target.value))}
                >
                  {[...Array(product.so_luong).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <Notify ref={err_notify} />
                <button className="Button" onClick={addToCartHandler}>
                  <BsHandbagFill style={{ marginRight: "7px" }} />
                  ADD TO CART
                </button>
              </div>
              <div className="btn-div">
                <button className="btn-view product" onClick={addWishList}>
                  <AiOutlineShareAlt style={{ marginRight: "7px" }} />
                  Share to...
                </button>
                <button className="btn-view product" onClick={addWishList}>
                  <BsFillSuitHeartFill style={{ marginRight: "7px" }} />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <hr style={{ margin: "0px 50px" }} />
          <div className="description-div">
            <h3 className="details-div">Description</h3>
            <p className="Desc">{product.mo_ta}</p>
          </div>

          <hr style={{ margin: "0px 50px" }} />
          <div className="rating">
            <div className="card-rating">
              <h3 className="review-card">REVIEWS AND RATING</h3>
              <div className="card-body-rating">
                <div className="row">
                  <div
                    className="col-sm-4 text-center"
                    style={{ width: "240px" }}
                  >
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
                  <div
                    className="col-sm-4 percent-rating"
                    style={{ marginTop: "22px", display: "inline-grid" }}
                  >
                    <p className="progress-label">
                      <div
                        className="progress-label-left"
                        style={{ float: "left", height: "13px" }}
                      >
                        <b
                          style={{
                            margin: "5px",
                            fontSize: "12px",
                            verticalAlign: "top",
                          }}
                        >
                          5 Star
                        </b>
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
                        <b
                          style={{
                            margin: "5px",
                            fontSize: "12px",
                            verticalAlign: "top",
                          }}
                        >
                          4 Star
                        </b>
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
                        <b
                          style={{
                            margin: "5px",
                            fontSize: "12px",
                            verticalAlign: "top",
                          }}
                        >
                          3 Star
                        </b>
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
                        <b
                          style={{
                            margin: "5px",
                            fontSize: "12px",
                            verticalAlign: "top",
                          }}
                        >
                          2 Star
                        </b>
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
                        <b
                          style={{
                            margin: "5px",
                            fontSize: "12px",
                            verticalAlign: "top",
                          }}
                        >
                          1 Star
                        </b>
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
          </div>
          <hr style={{ margin: "0px 50px" }} />
          <div className="custom-feedback">
            <h3 className="review-card">TOP REVIEWS</h3>
            <hr style={{ margin: "0px 50px" }} />
            {feedback !== [] ? <Reviews feedback={feedback}/> : <div>"Not any feedback"</div>}
          </div>
        </>
      )}
      <Footer/>
    </div>
  );
};
export default Product;
