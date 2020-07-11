import React from "react";

const ProjectsItem = ({ content }) => {
  return (
    <div className="card col-lg-4 col-md-6 col-sm-12 padded-card">
      <div className="card-body border-dark mb-3">
        <h5 className="card-title">{content.name}</h5>
        <p className="card-text">{content.description}</p>
        <a href={content.link} className="btn btn-primary">
          See Code
        </a>
      </div>
    </div>
  );
};
export default ProjectsItem;
