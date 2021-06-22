// src/compoents/App.js

import "../styles/styles.css";
import { useState } from "react";
import { useObserver } from "mobx-react";
import { useStores } from "../stores/index";

import Map from "./Map";

export default function App() {
  const { mapStore, locationStore } = useStores();

  return useObserver(() => (
    <div className="App">
      <h2>Ash - React Leaflet Map</h2>
      <Map />
    </div>
  ));
}
