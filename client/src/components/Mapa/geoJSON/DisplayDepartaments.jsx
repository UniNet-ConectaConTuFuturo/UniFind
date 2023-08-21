import departamentos from "../../../geoJSON/departamentos-argentina.json";
import { GeoJSON, useMap } from "react-leaflet";
import onEachFeature from "../../../api/onEachFeature/highlight";
import { useMapa } from "../../../hooks/useMapa";
import capitalizeFirst from "../../../api/capitalizeFirst";
function DisplayDepartaments() {
  const { departamentInfoEl, provInfoEl } = useMapa();
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
      eventHandlers={{
        mouseover: (e) => {
          const properties = e.sourceTarget.feature.properties;
          departamentInfoEl.current.textContent = capitalizeFirst(
            properties.departamento
          );
          provInfoEl.current.textContent =
            (properties.provincia === "CIUDAD AUTONOMA DE BUENOS AIRES"
              ? "CABA"
              : capitalizeFirst(properties.provincia)) + ",";
        },
        mouseout: () => {
          departamentInfoEl.current.textContent = "";
          provInfoEl.current.textContent = "";
        },
      }}
      style={className}
      onEachFeature={(f, l) => onEachFeature(f, l, className, map)}
      data={departamentos["features"]}
    />
  );
}

export default DisplayDepartaments;
