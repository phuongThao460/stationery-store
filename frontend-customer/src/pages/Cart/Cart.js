/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import CartItem from "./CartItems";

import { addToCart, removeFromCart } from "../../redux/action/cartAction";
import axios from "axios";

const Cart = () => {
  const dispatch = useDispatch();
  const [vouchers, setVouchers] = React.useState([]);
  const customerInfo = JSON.parse(
    window.localStorage.getItem("customer-account")
  );

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getAllVoucher = async () => {
    const data = await axios.post("http://localhost:8000/voucher/ttkh", {
      id_ttkh: customerInfo._id,
    });
    console.log(data.data);
    setVouchers(data.data);
  };

  useEffect(() => {
    getAllVoucher();
  }, []);

  const qtyChangeHandler = (id, count) => {
    dispatch(addToCart(id, count));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => Number(item.count) + count, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.gia_ban_hien_tai * item.count, 0)
      .toFixed(2);
  };

  const getIDVoucher = (event) => {
    window.localStorage.setItem("id_voucher", event.target.value);
  };
  return (
    <div className="Container-cart">
      <div className="Wrapper-cart">
        <h1 className="Title-cart">YOUR BAG</h1>

        <div className="Top">
          <Link to="/" className="TopButton">
            Continue shopping
          </Link>
          <div className="TopTexts">
            <span className="TopText">Shopping Bag(2)</span>
            <span className="TopText">Your Wishlist (0)</span>
          </div>

          <div className="voucher">
            <h1 className="Title-Info">Voucher</h1>
            <select className="city"  onChange={getIDVoucher}>
              <option key="0" value="null">Select voucher...</option>
              {vouchers ? (
                vouchers.map((item, index) => (
                  <option key={index} value={item._id}>{item.ten_voucher}</option>
                ))
              ) : (
                <option>No voucher</option>
              )}
            </select>
          </div>
        </div>

        <div className="Bottom">
          <div className="Info">
            {cartItems.length === 0 ? (
              <div>
                Your Cart Is Empty <Link to="/">Go Back</Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeFromCartHandler}
                />
              ))
            )}
          </div>
          <div className="Summary">
            <div className="summary-container">
              <h1 className="SummaryTitle">ORDER SUMMARY</h1>
              <div className="SummaryItem">
                <span className="SummaryItemText">Subtotal</span>
                <span className="SummaryItemPrice">{getCartCount()} items</span>
              </div>
              {/* <div className="SummaryItem">
                  <span className="SummaryItemText">Estimated Shipping</span>
                  <span className="SummaryItemPrice">28000</span>
                </div>
                <div className="SummaryItem">
                  <span className="SummaryItemText">Shipping Discount</span>
                  <span className="SummaryItemPrice">$ -5.90</span>
                </div> */}
              <div className="SummaryItem-total">
                <span className="SummaryItemText">Total</span>
                <span className="SummaryItemPrice">${getCartSubTotal()}</span>
                {window.localStorage.setItem("total", getCartSubTotal())}
              </div>
              {customerInfo ? (
                <Link to="/checkout">
                  <button
                    className="Button-checkout"
                    style={{ marginBottom: "20px" }}
                  >
                    Member checkout
                  </button>
                </Link>
              ) : (
                <Link to="/Login">
                  <button
                    className="Button-checkout"
                    style={{ marginBottom: "20px" }}
                  >
                    Member checkout
                  </button>
                </Link>
              )}
              <Link to="/CheckoutCustomer">
                <button className="Button-checkout">Guest checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
