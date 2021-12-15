import React from 'react'
import { Link } from "react-router-dom";

import PayPal from "../PayPal";

function LayoutCheckout(props) {
  return (
    <div className="container-checkout">
      <div className="wrapper-checkout">
        <h1 className="Title-checkout">Checkout</h1>
        <div className="bottom-checkout">
          <div className="Info-checkout">
            <div
              className="cusInfo"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              {props.cusAccountInfo ? (
                <div style={{ display: "block" }}>
                  <h1 className="Title-Info">Contact info</h1>
                  <div className="body-info">
                    <p>{props.cusAccountInfo.ten_kh}</p>
                  </div>
                  <div className="body-info">
                    <p>{props.cusAccountInfo.sdt}</p>
                  </div>
                  <div className="body-info">
                    <p>{props.cusAccountInfo.email}</p>
                  </div>
                </div>
              ) : (
                <div style={{ display: "block" }}>
                  <h1 className="Title-Info">Contact info</h1>
                  <div className="body-info">
                    <p>{props.customerInfo.ten_kh}</p>
                  </div>
                  <div className="body-info">
                    <p>{props.customerInfo.sdt}</p>
                  </div>
                  <div className="body-info">
                    <p>{props.customerInfo.email}</p>
                  </div>
                </div>
              )}
              {/* <div className="Payment" style={{ padding: "0px" }}>
                <h1 className="Title-Info">Payment Method</h1>
                <div className="body-info">
                  <p>Payment on delivery</p>
                </div>
              </div> */}
            </div>
            {props.cusAccountInfo ? (
              <div className="Shipping">
                <h1 className="Title-Info">Shipping Address</h1>
                <div className="address body-info">
                  <p>{props.cusAccountInfo.dia_chi + ", " + props.address}</p>
                </div>
              </div>
            ) : (
              <div className="Shipping">
                <h1 className="Title-Info">Shipping Address</h1>
                <div className="address body-info">
                  <p>{props.customerInfo.dia_chi + ", " + props.address}</p>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <div className="Summary-checkout" style={{ border: "0" }}>
              <div className="summary-container-checkout">
                <h1 className="SummaryTitle-checkout">Order Details</h1>
                <div
                  className="SummaryItem-checkout"
                  style={{ display: "block" }}
                >
                  {props.carts.map((item) => (
                    <div className="cart-item">
                      <div style={{ paddingBottom: "20px" }}>
                        <p className="body-title">{item.ten_sp}</p>
                        <p className="body-title">Amount: {item.count}</p>
                      </div>
                      <b style={{ marginLeft: "25px" }}>
                        ${item.gia_ban_hien_tai}
                      </b>
                    </div>
                  ))}
                </div>
                {props.vouchers ? (
                  <div className="summary-price">
                    <div className="SummaryItem-checkout">
                      <span className="SummaryItemText-checkout">Subtotal</span>
                      <span className="SummaryItemPrice-checkout">
                        {((props.total * props.vouchers) / 100).toFixed(2)}
                      </span>
                    </div>
                    <div className="SummaryItem-checkout">
                      <span className="SummaryItemText-checkout">
                        Shipping Fee
                      </span>
                      <span className="SummaryItemPrice-checkout">
                        {props.shipping.toFixed(2)}
                      </span>
                    </div>
                    <div className="SummaryItem-checkout">
                      <span className="SummaryItemText-checkout">
                        Discount Voucher
                      </span>
                      <span className="SummaryItemPrice-checkout">
                        {props.vouchers}%
                      </span>
                    </div>
                    <div className="SummaryItem-total-checkout">
                      <b className="SummaryItemText-checkout">Total</b>
                      <b className="SummaryItemPrice-checkout">
                        {(
                          props.total +
                          parseInt(props.shipping) -
                          (props.total * props.vouchers) / 100
                        ).toFixed(2)}
                      </b>
                    </div>
                    <Link to="/checkout">
                      <button
                        className="Button-checkout-checkout"
                        onClick={props.addCartDetails}
                      >
                        Confirm
                      </button>
                      <PayPal val={props.total} callback={this.handlePaypalCallback}/>
                    </Link>
                  </div>
                ) : (
                  <div className="summary-price">
                    <div className="SummaryItem-checkout">
                      <span className="SummaryItemText-checkout">Subtotal</span>
                      <span className="SummaryItemPrice-checkout">
                        {props.total.toFixed(2)}
                      </span>
                    </div>
                    <div className="SummaryItem-checkout">
                      <span className="SummaryItemText-checkout">
                        Shipping Fee
                      </span>
                      <span className="SummaryItemPrice-checkout">
                        {props.shipping.toFixed(2)}
                      </span>
                    </div>
                    <div className="SummaryItem-checkout">
                      <span className="SummaryItemText-checkout">
                        Discount Voucher
                      </span>
                      <span className="SummaryItemPrice-checkout">0%</span>
                    </div>
                    <div className="SummaryItem-total-checkout">
                      <b className="SummaryItemText-checkout">Total</b>
                      <b className="SummaryItemPrice-checkout">
                        {(props.total + parseInt(props.shipping)).toFixed(2)}
                      </b>
                    </div>
                    <button
                      className="Button-checkout-checkout"
                      onClick={props.addCartDetails}
                    >
                      Confirm
                    </button>
                    <div className="payment-with-paypal">
                    <PayPal val={props.total} callback={props.handlePaypalCallback}/>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutCheckout
