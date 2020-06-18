import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="navitem-active">
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavBar;
