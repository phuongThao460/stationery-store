import React from "react";
import { FiLinkedin, FiFacebook, FiTwitter, FiPhone } from 'react-icons/fi'
const Footer = () => {
  return (
    <div className="footer">
      <div className="about">
        <h3>About</h3>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Loyalty Program</p>
        <p>Referral Program</p>
        <p>Career</p>
        <p>Store Location</p>
        <p>Student Discount</p>
      </div>
      <div className="help">
        <h3>Help</h3>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Loyalty Program</p>
        <p>Referral Program</p>
        <p>Career</p>
        <p>Store Location</p>
        <p>Student Discount</p>
      </div>
      <div className="social-media">
        <h3>Folow us</h3>
        <div className="icon-social">
          <p>
            <FiFacebook color="#fff" size={20} style={{position: "absolute", margin: "14px"}}/>{" "}
          </p>
          <p>
            <FiTwitter color="#fff" size={20} style={{position: "absolute", margin: "14px"}}/>
          </p>
          <p>
            <FiLinkedin color="#fff" size={20} style={{position: "absolute", margin: "14px"}}/>
          </p>
          <p>
            <FiPhone color="#fff" size={20} style={{position: "absolute", margin: "14px"}}/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
