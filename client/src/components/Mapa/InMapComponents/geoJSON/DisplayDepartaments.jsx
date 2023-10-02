import { GeoJSON, useMapEvent } from "react-leaflet";
import useGeoJson from "../../../../hooks/useGeoJson";
import { removeAccents } from "../../../../api/TextFunctions";
import { useMapa } from "../../../../hooks/useMapa";
import { useState } from "react";
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
  /* useMapEvent("zoomend", (e) => {
    const zoom = e.target._zoom;
    console.log(zoom);
    if(zoom > 13) 
      {
      }
    //else
      //depRef.current.interactive = true
  }) */
  console.log("departaments");
  return (
    <GeoJSON
      ref={depRef}
      style={className}
      onEachFeature={(feature, layer) =>
        onEachFeature(feature, layer, depRef)
      }
      filter={(layer) =>
        layer.properties.provincia.toLowerCase() ===
        removeAccents(provInfo.current.textContent.toLowerCase())
      }
    />
  );
}

export default DisplayDepartaments;
