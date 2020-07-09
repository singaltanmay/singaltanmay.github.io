import React from "react";
import "./ExperienceItem.css";

const ExperienceItem = ({ content }) => {
  return (
    <div className="card border-dark mb-3 experience-card">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={content.logo}
            className="card-img company-logo"
            loading="lazy"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{content.role}</h5>
            <h6 className="card-subtitle">{content.organization}</h6>
            <p className="card-text">
              <small className="text-muted">
                {content.from} -- {content.to}
              </small>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="card-text">{content.description}</p>
      </div>
    </div>
  );
};
export default ExperienceItem;
