import { useState } from "react";
import { useAsObservableSource, useObserver } from "mobx-react";
import { useStores } from "../stores/index";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { MarkerGeneral } from "./MarkerGeneral";
import "../styles/map.css";

export default function Map() {
  const { mapStore, useStore } = useStores();
  // const [zoom, setZoom] = mapStore.zoom;  // inital zoom level

  // track zoomLevelChange
  // TO DO
  //  mapStore.zoom = mapEvents.getZoom();

  return useObserver(() => (
    <div className="Map">
      <MapContainer
        center={[51.505, -0.09]}
        dragging={true}
        doubleclickZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright"  >OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      zoom = {mapStore.zoom}
    </div>
  ));
}
