import { MapContainer, TileLayer } from "react-leaflet";
import { MarkerGeneral } from "./MarkerGeneral";
import "../styles/map.css";

export function Map() {
  return (
    <MapContainer
      className="map"
      center={[51.505, -0.09]}
      zoom={13}
      dragging={true}
      doubleClickZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerGeneral />
    </MapContainer>
  );
}
