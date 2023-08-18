import { LayerGroup, Marker, useMapEvent } from "react-leaflet";
import { useMarkers } from "../../context/Markers/useMarkers";
import { useEffect } from "react";

import * as api from "../../api/api";
import PopUp from "./PopUps/PopUp";

function DisplayMarkers() {
  const {
    distanciaMarcadores,
    displayMarkers,
    setDisplayMarkers,
    markers,
    setMarkers,
    carreras,
    names,
    gestion,
  } = useMarkers();
  useMapEvent("zoom", ({ target }) => {
    if (target._zoom >= distanciaMarcadores.current) {
      setDisplayMarkers(true);
    } else {
      setDisplayMarkers(false);
    }
  });
  useEffect(() => {
    (async () => {
      try {
        const points = await api.post("/filter", {
          names: names,
          gestion,
          carreras: carreras,
        });
        setMarkers(points);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setMarkers, carreras, names, gestion]);
  return (
    <LayerGroup>
      {displayMarkers &&
        markers.map((u) => {
          return (
            <Marker key={u.id_universidad} position={[u.Point.x, u.Point.y]}>
              <PopUp id_universidad={u.id_universidad} />
            </Marker>
          );
        })}
    </LayerGroup>
  );
}
export default DisplayMarkers;
