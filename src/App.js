import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import Intro from "./components/Intro.js";
import Experience from "./components/Experience.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

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
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}
export default App;
