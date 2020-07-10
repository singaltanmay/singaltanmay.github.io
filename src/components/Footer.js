import React from "react";
import SocialContact from "./SocialContact";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container" id="contact-section">
      <h3>Contact Me</h3>
      <div className="social-icons">
        <SocialContact />
      </div>
      <h6 className="copyright">© Handcrafted by Tanmay Singal</h6>
    </div>
  );
};
export default Footer;
