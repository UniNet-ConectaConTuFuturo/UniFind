import { Suspense, lazy, useState } from "react";
import { LayerGroup, Pane, useMapEvent } from "react-leaflet";
const DisplayDepartaments = lazy(() => import("./DisplayDepartaments"));
const DisplayProvincias = lazy(() => import("./DisplayProvincias"));
const DisplayPais = lazy(() => import("./DisplayPais"));
import GeoJsonProvider from "../../../../context/Mapa/GeoJSON/GeoJsonProvider";

function DisplayGeoJSON() {
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
  });

  return (
    <GeoJsonProvider>
      <LayerGroup>
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
      </LayerGroup>
    </GeoJsonProvider>
  );
}

export default DisplayGeoJSON;
