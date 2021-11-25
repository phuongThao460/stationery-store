import React from 'react'
import { IoMdRemove } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import "../style/Cart.css";

const Cart = () => {
    return (
    <div className="Container-cart" >
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
            <div className="Product-cart">
              <div className="ProductDetail-cart">
                <img className="Image-cart" src="https://inbacha.com/wp-content/uploads/2021/05/in-so-tay-doc-quyen1.jpg" />
                <div className="Details-cart">
                  <span className="ProductName">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="ProductId">
                    <b>ID:</b> 93813718293
                  </span>
                  <div className="ProductColor" color="black" />
                </div>
              </div>
              <div className="PriceDetail">
                <div className="ProductAmountContainer">
                  <GrAdd />
                  <div className ="ProductAmount">2</div>
                  <IoMdRemove />
                </div>
                <div className="ProductPrice">$ 30</div>
              </div>
            </div>
            <hr className="Hr"/>
          </div>
          <div className="Summary">
            <h1 className="SummaryTitle">ORDER SUMMARY</h1>
            <div className="SummaryItem">
              <span className="SummaryItemText">Subtotal</span>
              <span className="SummaryItemPrice">$ 80</span>
            </div>
            <div className="SummaryItem">
              <span className="SummaryItemText">Estimated Shipping</span>
              <span className="SummaryItemPrice">$5.90</span>
            </div>
            <div className="SummaryItem">
              <span className="SummaryItemText">Shipping Discount</span>
              <span className="SummaryItemPrice">$ -5.90</span>
            </div>
            <div className="SummaryItem-total">
              <span className="SummaryItemText">Total</span>
              <span className="SummaryItemPrice">$ 80</span>
            </div>
            <button className="Button-checkout">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Cart
