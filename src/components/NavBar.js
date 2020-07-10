import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">
          PORTFOLIO
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navcontrols"
          aria-controls="navcontrols"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navcontrols">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#intro-section">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience-section">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects-section">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-section">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
