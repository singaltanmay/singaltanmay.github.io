import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import Intro from "./components/Intro.js";
import Experience from "./components/Experience.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="container header-navbar">
          <NavBar />
        </header>
        <Intro />
        <Experience />
      </React.Fragment>
    );
  }
}
export default App;
