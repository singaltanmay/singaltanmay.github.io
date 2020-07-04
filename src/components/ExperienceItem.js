import React from "react";
import "./ExperienceItem.css";

const ExperienceItem = ({ content }) => {
  return (
    <div class="card border-dark mb-3 experience-card">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={content.logo} class="card-img company-logo" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{content.role}</h5>
            <h6 class="card-subtitle">{content.organization}</h6>
            <p class="card-text">
              <small class="text-muted">
                {content.from} -- {content.to}
              </small>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p class="card-text">{content.description}</p>
      </div>
    </div>
  );
};
export default ExperienceItem;
