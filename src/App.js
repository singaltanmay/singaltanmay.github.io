import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import Intro from "./components/Intro.js";
import Experience from "./components/Experience.js";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <NavBar />
        </header>
        <Intro />
        <Experience />
      </div>
    );
  }
}
export default App;
