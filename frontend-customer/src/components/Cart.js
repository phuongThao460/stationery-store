/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import { IoMdRemove } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import "../style/Cart.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      style: {
        width: "10px",
        height: "10px",
        margin: "0 12px",
      },
    };
    this.getArray();
  }

  getArray = () => {
    this.state.array = JSON.parse(window.localStorage.getItem("products"));
    this.setState(this);
    console.log(this.state.array.length);
  };
  render() {
    let subtotal = 0;
    const { style, array } = this.state;
    return (
      <div className="Container-cart">
        <div className="Wrapper-cart">
          <h1 className="Title-cart">YOUR BAG</h1>
          <div className="Top">
            <button className="TopButton">CONTINUE SHOPPING</button>
            <div className="TopTexts">
              <span className="TopText">Shopping Bag(2)</span>
              <span className="TopText">Your Wishlist (0)</span>
            </div>
            <button className="TopButton-checkout">CHECKOUT NOW</button>
          </div>

          <div className="Bottom">
            <div className="Info">
              {array.map((item) => (
                <div className="Product-cart">
                  <div className="ProductDetail-cart">
                    <img
                      alt=""
                      className="Image-cart"
                      src="https://inbacha.com/wp-content/uploads/2021/05/in-so-tay-doc-quyen1.jpg"
                    />
                    <div className="Details-cart">
                      <span className="ProductName" style={{ width: "454px" }}>
                        <b>{item.ten_sp}</b>
                      </span>
                      <span className="ProductId" style={{ display: "inline-flex" }}>
                        Amount: 
                        <div className="ProductAmountContainer">
                          <GrAdd style={style} />
                          <div className="ProductAmount">{item.so_luong}</div>
                          <IoMdRemove style={style} />
                        </div>
                      </span>
                      <span style={{ display: "inline-flex" }}>
                        Color:{" "}
                        <div
                          className="ProductColor"
                          style={{
                            backgroundColor: `${item.mau_sac}`,
                            marginLeft: "12px",
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="PriceDetail">
                    <div className="ProductPrice">{item.don_gia_xuat * 1000}</div>
                  </div>
                  <div style={{ display: "none" }}>
                    {(subtotal = subtotal + item.so_luong * item.don_gia_xuat)}
                  </div>
                </div>
              ))}
            </div>
            <div className="Summary">
              <div className="summary-container">
                <h1 className="SummaryTitle">ORDER SUMMARY</h1>
                <div className="SummaryItem">
                  <span className="SummaryItemText">Subtotal</span>
                  <span className="SummaryItemPrice">{subtotal * 1000}</span>
                </div>
                <div className="SummaryItem">
                  <span className="SummaryItemText">Estimated Shipping</span>
                  <span className="SummaryItemPrice">28000</span>
                </div>
                <div className="SummaryItem">
                  <span className="SummaryItemText">Shipping Discount</span>
                  <span className="SummaryItemPrice">$ -5.90</span>
                </div>
                <div className="SummaryItem-total">
                  <span className="SummaryItemText">Total</span>
                  <span className="SummaryItemPrice">{subtotal * 1000 + 28000}</span>
                </div>
                <button className="Button-checkout">CHECKOUT NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
