import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Intro from "./components/Intro.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <br />
        <h1>Portfolio</h1>
        <br />
        <Intro />
      </div>
    );
  }
}
export default App;
