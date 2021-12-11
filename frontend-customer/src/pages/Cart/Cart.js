/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import CartItem from "./CartItems";

import { addToCart, removeFromCart } from "../../redux/action/cartAction";

const Cart = () => {
  const dispatch = useDispatch();

  const customerInfo = JSON.parse(window.localStorage.getItem("customer"));

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

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
  return (
    <div className="Container-cart">
      <div className="Wrapper-cart">
        <h1 className="Title-cart">YOUR BAG</h1>

        <div className="Top">
          <Link to="/" className="TopButton">Continue shopping</Link>
          <div className="TopTexts">
            <span className="TopText">Shopping Bag(2)</span>
            <span className="TopText">Your Wishlist (0)</span>
          </div>

          <button className="TopButton-checkout">CHECKOUT NOW</button>
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
