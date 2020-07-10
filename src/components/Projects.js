import React from "react";
import ProjectsItem, { Project } from "./ProjectsItem";

const payload = [
  {
    name: "contig-alias",
    description: "Service to provide synonyms of chromosome/contig identifiers",
    link: "https://github.com/singaltanmay/contig-alias",
  },
  {
    name: "Daffodil-Renters",
    description: "Server and client of a housing / real-estate app.",
    link: "https://github.com/singaltanmay/Daffodil-Renters",
  },
  {
    name: "Portfolio Website",
    description:
      "My portfolio website showcasing my experience and favourite projects. You're on it right now!",
    link: "https://github.com/singaltanmay/singaltanmay.github.io",
  },
  {
    name: "moviedb-client",
    description:
      "A React app that consumes the OMDb API to let users search for and view more information about a movie / tv show / other stuff on omdb. ",
    link: "https://github.com/singaltanmay/moviedb-client",
  },
  {
    name: "Earthquakes",
    description:
      "Earthquakes is an Android app that uses USGS' web API to display a list of recent Earthquakes happening around the world. ",
    link: "https://github.com/singaltanmay/Earthquakes",
  },
];

const Projects = () => {
  return (
    <div className="container-fluid colored-section" id="projects-section">
      <h3>Projects</h3>
      <div className="card-deck">
        {payload.map((item, index) => (
          <ProjectsItem key={index} content={payload[index]} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
