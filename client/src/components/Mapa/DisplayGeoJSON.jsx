import { Suspense, lazy, useState } from "react";
import { Pane, useMap, useMapEvent } from "react-leaflet";
const DisplayDepartaments = lazy(() => import("./geoJSON/DisplayDepartaments"));
const DisplayProvincias = lazy(() => import("./geoJSON/DisplayProvincias"));
const DisplayPais = lazy(() => import("./geoJSON/DisplayPais"));
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
      <Suspense>
        <Pane name="pais" style={{ zIndex: 226 }}>
          <DisplayPais />
        </Pane>
      </Suspense>
      {provincias && (
        <Suspense>
          <Pane name="provincias" style={{ zIndex: 227 }}>
            <DisplayProvincias />
          </Pane>
        </Suspense>
      )}
      {departaments && (
        <Suspense>
          <Pane name="departamentos" style={{ zIndex: 228 }}>
            <DisplayDepartaments />
          </Pane>
        </Suspense>
      )}
    </Pane>
  );
}

export default DisplayGeoJSON;
