import { Marker, Popup } from "react-leaflet";

export function MarkerGeneral() {
  return (
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}