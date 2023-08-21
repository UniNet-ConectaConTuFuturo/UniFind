import { MapContainer } from "react-leaflet";
import "./leaflet.css";
import Tiles from "./Tiles";
import DisplayGeoJSON from "./DisplayGeoJSON";
import DisplayMarkers from "./DisplayMarkers";
import Filters from "./LayersControl/Filters";
import Options from "./LayersControl/Options";
import ControlZoom from "./ControlZoom";
import Info from "./Info";
import MapaProvider from "../../context/Mapa/MapaProvider";
import GeoInfo from "./geoJSON/GeoInfo";
function Mapa() {
  return (
    <MapaProvider>
      <Filters />
      <Options />
      <GeoInfo />
      <Info />
      <MapContainer
        className="h-screen w-screen z-0"
        center={[-34.66, -58.5]}
        zoom={11}
        scrollWheelZoom={true}
        zoomControl={false}
        attributionControl={false}
        zoomSnap={0.5}
        doubleClickZoom={false}
      >
        <ControlZoom />
        <Tiles />
        <DisplayGeoJSON />
        <DisplayMarkers />
      </MapContainer>
    </MapaProvider>
  );
}

export default Mapa;
