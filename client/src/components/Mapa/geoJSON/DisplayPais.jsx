import { GeoJSON } from "react-leaflet";
import pais from "../../../geoJSON/pais.json";
function DisplayPais() {
  const className = {
    fillOpacity: 0,
    color: "#fff",
    opacity: 1,
    weight: 3,
    lineJoin: "round",
  };
  return <GeoJSON style={className} data={pais["features"]} />;
}
export default DisplayPais;
