import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import Intro from "./components/Intro.js";
import Experience from "./components/Experience.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Projects from "./components/Projects.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="container header-navbar">
          <NavBar />
        </header>
        <Intro />
        <Experience />
        <Projects />
      </React.Fragment>
    );
  }
}
export default App;
