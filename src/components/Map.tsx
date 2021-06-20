import React, { Component, useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { MarkerGeneral } from "./MarkerGeneral";
import "../styles/map.css";

function MapEvents() {
  const [zoomLevel, setZoomLevel] = useState(5); // initial zoom level provided for MapContainer

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom());
    }
  });

  console.log(zoomLevel);

  return null;
}

class Map extends Component {
  render() {
    return (
      <div className="Map">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          dragging={true}
          doubleClickZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright"  >OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MarkerGeneral />
          <MapEvents />
        </MapContainer>
        zoom level = see console log
      </div>
    );
  }
}
export default Map;
