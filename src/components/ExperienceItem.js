import React from "react";

const ExperienceItem = ({ content }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 card-parent">
      <div className="card padded-card">
        <div className="row no-gutters">
          <div className="col-md-4 company-logo">
            <img src={content.icon} className="card-img" />
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
    </div>
  );
};
export default ExperienceItem;
