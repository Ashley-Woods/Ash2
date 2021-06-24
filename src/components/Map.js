import { useState } from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../stores/index";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
//import { MarkerGeneral } from './MarkerGeneral';
import "../styles/map.css";

function MapEventHander() {
  const { mapStore } = useStores();
  const [zoomLevel, setZoomLevel] = useState(mapStore.zoom);
  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom());
      mapStore.zoom = zoomLevel;
    }
  });
  return null;
}

export default function Map() {
  const { mapStore } = useStores();

  return useObserver(() => (
    <div className="Map">
      <MapContainer
        center={mapStore.center}
        zoom={mapStore.zoom}
        dragging={true}
        doubleclickZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright"  >OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapEventHander />
      </MapContainer>
    </div>
  ));
}
