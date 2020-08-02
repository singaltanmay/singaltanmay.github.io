import React from "react";

const ProjectsItem = ({ content }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 card-parent">
      <div className="card padded-card">
        <div className="row no-gutters">
          <div className="card-body border-dark mb-3">
            <h5 className="card-title">{content.name}</h5>
            <p className="card-text">{content.description}</p>
            <a href={content.link} className="btn btn-primary">
              See Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsItem;
