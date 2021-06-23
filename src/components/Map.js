import { useState } from "react";
import { useObserver } from "mobx-react";
import { useStores } from "../stores/index";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
//import { MarkerGeneral } from './MarkerGeneral';
import "../styles/map.css";

export default function Map() {
  const { mapStore, useStore } = useStores();
  const [zoom, setZoom] = useState(mapStore.zoom); // inital zoom level

  // track zoomLevelChange
  // TO DO
  //  mapStore.zoom = mapEvents.getZoom();

  return useObserver(() => (
    <div className="Map">
      zoom = {mapStore.zoom}
      <MapContainer
        center={[51.505, -0.09]}
        dragging={true}
        doubleclickZoom={true}
        zoom={mapStore.zoom}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright"  >OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  ));
}
