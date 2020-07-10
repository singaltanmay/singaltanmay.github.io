import React from "react";
import "./SocialIcon.css";

const SocialIcon = ({ content }) => {
  return (
    <React.Fragment>
      <a href={content.link}>
        <img
          className="social-icon"
          src={content.image}
          alt={content.name}
        ></img>
      </a>
    </React.Fragment>
  );
};
export default SocialIcon;
