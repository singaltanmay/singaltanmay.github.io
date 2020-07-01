import React from "react";

const ExperienceItem = ({ content }) => {
  return (
    <div>
      <h4>{content.role}</h4>
      <h4>{content.organization}</h4>
      <h5>
        {content.from} -- {content.to}
      </h5>
      <p>{content.description}</p>
    </div>
  );
};
export default ExperienceItem;
