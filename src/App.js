import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <br />
        <h1>Portfolio</h1>
      </div>
    );
  }
}
export default App;
