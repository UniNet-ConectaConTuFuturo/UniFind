import { MapContainer } from "react-leaflet";
import "./leaflet.css";
import Tiles from "./Tiles";
import DisplayGeoJSON from "./DisplayGeoJSON";
import DisplayMarkers from "./DisplayMarkers";
import Filters from "./LayersControl/Filters";
import Options from "./LayersControl/Options";
import ControlZoom from "./ControlZoom";
import Info from "./Info";
import MarkersProvider from "../../context/Markers/MarkersProvider";
function Mapa() {
  return (
    <MarkersProvider>
      <Filters />
      <Options />
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
    </MarkersProvider>
  );
}

export default Mapa;
