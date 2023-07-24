import departamentos from "./departamentos-argentina.json";
import { GeoJSON, useMap } from "react-leaflet";
import onEachFeature from "./highlight";
function DisplayDepartaments() {
  const className = {
      fillOpacity: 0,
      color: "#555",
      opacity: 1,
      weight: 1,
      lineJoin: "round",
    },
    map = useMap();
  return (
    <GeoJSON
      style={className}
      onEachFeature={(f, l) => onEachFeature(f, l, className, map)}
      data={departamentos["features"]}
    />
  );
}

export default DisplayDepartaments;
