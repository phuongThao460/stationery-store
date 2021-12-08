import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai"
function NotificateOrder() {

  return (
    <div style={{ textAlign: "center", marginTop: "150px", fontSize: "20px" }}>
      <b style={{ fontSize: "40px", marginBottom: "15px" }}>
        Thank you for your order
      </b>
      <div style={{marginTop: "20px"}}>
        <p>
          As soon as your package is on its way, you will receive a delivery
          confirmation from us by email{" "}
        </p>
        <p>
          Please be so kind to leave us a review and share your purchase with us
          on social media
        </p>
      </div>
      <div style={{marginTop: "30px"}}>
      
        <Link to="/" style={{color: "blue", textDecoration: "underline"}}><AiOutlineArrowLeft style={{paddingRight: "10px"}}/>Continue shopping</Link>
      </div>
    </div>
  );
}

export default NotificateOrder;
