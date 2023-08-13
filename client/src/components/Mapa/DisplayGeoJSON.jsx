import { Pane, useMap, useMapEvent } from "react-leaflet";
import DisplayDepartaments from "./geoJSON/DisplayDepartaments";
import DisplayProvincias from "./geoJSON/DisplayProvincias";
import { useState } from "react";
import DisplayPais from "./geoJSON/DisplayPais";
import { lookFeature } from "../../api/onEachFeature/highlight";

function DisplayGeoJSON() {
  const map = useMap();
  const [provincias, setProvincias] = useState(true);
  const [departaments, setDepartaments] = useState(true);
  useMapEvent("zoom", ({ target }) => {
    const zoom = target._zoom;
    if (zoom >= 3.5) {
      setProvincias(true);
      if (zoom >= 6.5) {
        setDepartaments(true);
      } else {
        setDepartaments(false);
      }
    } else {
      setProvincias(false);
    }
    lookFeature(map);
  });

  return (
    <Pane name="geoJSON" style={{ zIndex: 225 }}>
      <DisplayPais>
        {provincias && (
          <DisplayProvincias>
            {departaments && <DisplayDepartaments />}
          </DisplayProvincias>
        )}
      </DisplayPais>
    </Pane>
  );
}

export default DisplayGeoJSON;
