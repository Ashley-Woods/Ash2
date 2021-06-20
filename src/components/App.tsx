import "../styles/styles.css";
import React, { Component } from "react";
import Map from "./Map";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h2>Ash - React Leaflet Map</h2>
        <h2>Current Zoom Level = ToDo </h2>
        <Map />
      </div>
    );
  }
}
export default App;
