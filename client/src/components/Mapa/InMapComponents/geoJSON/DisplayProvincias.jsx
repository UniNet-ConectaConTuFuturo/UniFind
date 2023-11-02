import { GeoJSON, useMapEvent } from "react-leaflet";
import { useRef } from "react";
import {useGeoJson} from "../../../../hooks/useContexts";
import provincias from "../../../../geoJSON/provincia.json";
import departamentos from "../../../../geoJSON/departamentos.json";
import zoomLayers from "./zoomLayers";
function DisplayProvincias() {
  const { onEachFeature, depRef } = useGeoJson();
  const className = {
    fillOpacity: 0,
    color: "#aaa",
    opacity: 1,
    weight: 2,
    lineJoin: "round",
  };
  const interactive = useRef(true);
  const geoRef = useRef();
  useMapEvent("zoomend", (e) => {
    if (e.target._zoom >= zoomLayers.departamento) {
      geoRef.current.resetStyle();
      interactive.current = false;
    } else {
      interactive.current = true;
    }
  });
  return (
    <GeoJSON
      ref={geoRef}
      style={className}
      eventHandlers={{
        mouseover: () => {
          if (depRef.current) {
            depRef.current.clearLayers();
            depRef.current.addData(departamentos);
          }
        },
      }}
      onEachFeature={(feature, layer) =>
        onEachFeature(feature, layer, geoRef, interactive)
      }
      data={provincias["features"]}
    />
  );
}
export default DisplayProvincias;
