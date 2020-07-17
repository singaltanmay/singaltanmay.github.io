import React from "react";
import SocialContact from "./SocialContact";

const Footer = () => {
  return (
    <div className="container-fluid colored-section" id="contact-section">
      <div className="social-icons">
        <SocialContact />
      </div>
      <br />
      <h6 className="copyright">© Handcrafted by Tanmay Singal</h6>
    </div>
  );
};
export default Footer;
