import { MapContainer, Marker, Popup, ZoomControl } from "react-leaflet";
import "./leaflet.css";
import Tiles from "./Tiles";
import DisplayGeoJSON from "./DisplayGeoJSON";
const LatLngBounds = {
  _northEast: { lat: -23.3200784211351, lng: -54.6516966230371 },
  _southWest: { lat: -54.5, lng: -70.1185705180601 },
};
function Mapa() {
  return (
    <MapContainer
      className="h-screen w-screen z-0"
      center={[-38.9100392105676, -62.3851335705486]}
      zoom={4}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}
      zoomSnap={0.5}
    >
      <ZoomControl position="bottomright" />
      <Tiles />
      <DisplayGeoJSON />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;
