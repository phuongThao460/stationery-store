import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai"
import Footer from '../components/Footer'
function NotificateOrder() {

  return (
    <>
    <div style={{ textAlign: "center", marginTop: "150px", fontSize: "20px" }}>
      <h1 style={{ marginBottom: "15px" }}>
        Thank you for your order
      </h1>
      <div style={{marginTop: "30px"}}>
        <p style={{fontSize: "18px", marginBottom: "0"}}>
          As soon as your package is on its way, you will receive a delivery
          confirmation from us by email{" "}
        </p>
        <p style={{fontSize: "18px"}}>
          Please be so kind to leave us a review and share your purchase with us
          on social media
        </p>
      </div>
      <div style={{marginTop: "30px"}}>
        <Link to="/" style={{color: "blue", textDecoration: "underline", fontSize: "15px"}}><AiOutlineArrowLeft style={{paddingRight: "10px", fontSize: "25px"}}/>Continue shopping</Link>
      </div>

    </div>
    <Footer/>
    </>
  );
}

export default NotificateOrder;
