import { GeoJSON, useMapEvent } from "react-leaflet";
import useGeoJson from "../../../../hooks/useGeoJson";
import { removeAccents } from "../../../../api/TextFunctions";
import { useMapa } from "../../../../hooks/useMapa";
function DisplayDepartaments() {
  const { depRef, onEachFeature } = useGeoJson();
  const { provInfo } = useMapa();
  const className = {
    fillOpacity: 0,
    color: "#555",
    opacity: 1,
    weight: 1,
    lineJoin: "round",
  };
  console.log("departaments");
  return (
    <GeoJSON
      ref={depRef}
      style={className}
      onEachFeature={(feature, layer) => onEachFeature(feature, layer, depRef)}
      filter={(layer) =>
        layer.properties.provincia.toLowerCase() ===
        removeAccents(provInfo.current.textContent.toLowerCase())
      }
    />
  );
}

export default DisplayDepartaments;
