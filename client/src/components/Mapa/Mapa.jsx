import { MapContainer, Marker, Popup, ZoomControl } from "react-leaflet";
import "./leaflet.css";
import Tiles from "./Tiles";
import DisplayGeoJSON from "./DisplayGeoJSON";
import DisplayMarkers from "./DisplayMarkers";
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
      <DisplayMarkers />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;
