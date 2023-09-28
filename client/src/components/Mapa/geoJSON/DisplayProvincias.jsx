import provincias from "../../../geoJSON/provincia.json";
import { GeoJSON, useMap } from "react-leaflet";
import onEachFeature from "../../../api/onEachFeature/highlight";
import { useMapa } from "../../../hooks/useMapa";
import capitalizeFirst from "../../../api/capitalizeFirst";
function DisplayProvincias() {
  const { departamentInfoEl, provInfoEl } = useMapa();
  const className = {
      fillOpacity: 0,
      color: "#aaa",
      opacity: 1,
      weight: 2,
      lineJoin: "round",
    },
    map = useMap();
  return (
    <GeoJSON
      style={className}
      eventHandlers={{
        mouseover: (e) => {
          departamentInfoEl.current.textContent = "";
          provInfoEl.current.textContent = capitalizeFirst(
            e.sourceTarget.feature.properties.nam
          );
        },
        mouseout: () => {
          departamentInfoEl.current.textContent = "";
          provInfoEl.current.textContent = "";
        },
      }}
      onEachFeature={(f, l) => onEachFeature(f, l, className, map)}
      data={provincias["features"]}
    />
  );
}
export default DisplayProvincias;
