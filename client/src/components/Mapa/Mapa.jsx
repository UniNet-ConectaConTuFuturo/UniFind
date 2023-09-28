import "leaflet/dist/leaflet.css";
import { Suspense, lazy } from "react";

import MapaProvider from "../../context/Mapa/MapaProvider";
import { MapContainer } from "react-leaflet";

const ControlZoom = lazy(() => import("./ControlZoom"));
import Tiles from "./Tiles";
const DisplayGeoJSON = lazy(() => import("./DisplayGeoJSON"));
const DisplayMarkers = lazy(() => import("./Markers/DisplayMarkers"));

const Filters = lazy(() => import("./Filters/Filters"));
const Options = lazy(() => import("./Options/Options"));
const GeoInfo = lazy(() => import("./geoJSON/GeoInfo"));
const AsideInfo = lazy(() => import("./AsideInfo"));
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
        <Suspense>
          <ControlZoom />
        </Suspense>
        <Tiles />
        <Suspense>
          <DisplayGeoJSON />
        </Suspense>
        <Suspense>
          <DisplayMarkers />
        </Suspense>
      </MapContainer>
      <Suspense>
        <Filters />
        <Options />
        <GeoInfo />
        <AsideInfo />
      </Suspense>
    </MapaProvider>
  );
}

export default Mapa;
