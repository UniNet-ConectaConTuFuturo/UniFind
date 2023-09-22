import { MapContainer } from "react-leaflet";
import "./leaflet.css";
import Tiles from "./Tiles";
import DisplayGeoJSON from "./DisplayGeoJSON";
import DisplayMarkers from "./Markers/DisplayMarkers";
import Filters from "./LayersControl/Filters";
import Options from "./LayersControl/Options";
import ControlZoom from "./ControlZoom";
import AsideInfo from "./AsideInfo";
import MapaProvider from "../../context/Mapa/MapaProvider";
import GeoInfo from "./geoJSON/GeoInfo";
function Mapa() {
  return (
    <MapaProvider>
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
      <Filters />
      <Options />
      <GeoInfo />
      <AsideInfo />
    </MapaProvider>
  );
}

export default Mapa;
