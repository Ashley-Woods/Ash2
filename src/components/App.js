// src/compoents/App.js
import Map from "./Map";
import InfoPanel from "./InfoPanel";
import "../styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h3>Ash - React Leaflet Map</h3>
      </header>
      <Map />
      <InfoPanel />
    </div>
  );
}
