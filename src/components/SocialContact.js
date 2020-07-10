import React from "react";
import FacebookLogo from "./../images/facebook-logo.png";
import GitHubLogo from "./../images/github-logo.png";
import LinkedInLogo from "./../images/linkedin-logo.png";
import EmailLogo from "./../images/email-logo.png";
import SocialIcon from "./SocialIcon";

const payload = [
  {
    name: "Facebook",
    image: FacebookLogo,
    link: "https://www.facebook.com/tanmaysingal2013",
  },
  {
    name: "LinkedIn",
    image: LinkedInLogo,
    link: "https://www.linkedin.com/in/tanmaysingal/",
  },
  {
    name: "GitHub",
    image: GitHubLogo,
    link: "https://www.github.com/singaltanmay",
  },
  {
    name: "E-mail",
    image: EmailLogo,
    link: "mailto:tanmaysingal2013@gmail.com",
  },
];

const SocialContact = () => {
  return (
    <div className="social-icon-row">
      {payload.map((item, index) => (
        <SocialIcon key={index} content={item} />
      ))}
    </div>
  );
};
export default SocialContact;
