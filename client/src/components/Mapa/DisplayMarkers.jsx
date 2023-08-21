import { FeatureGroup, Marker, useMap, useMapEvent } from "react-leaflet";
import { useMarkers } from "../../hooks/useMarkers";
import { useEffect, useRef } from "react";

import * as api from "../../api/api";
import PopUp from "./PopUps/PopUp";
import { useGlobal } from "../../hooks/useGlobal";

function DisplayMarkers() {
  const { token } = useGlobal();
  const {
    distanciaMarcadores,
    displayMarkers,
    setDisplayMarkers,
    markers,
    setMarkers,
    actualizarBusqueda,
    filtrarFavoritas,
    carreras,
    names,
    gestion,
  } = useMarkers();
  useMapEvent("zoom", ({ target }) => {
    if (target._zoom >= distanciaMarcadores) {
      setDisplayMarkers(true);
    } else {
      setDisplayMarkers(false);
    }
  });
  const map = useMap();
  useEffect(() => {
    if (map.getZoom() >= distanciaMarcadores) setDisplayMarkers(true);
    else setDisplayMarkers(false);
  }, [distanciaMarcadores, setDisplayMarkers, map]);
  useEffect(() => {
    (async () => {
      try {
        const points = await api.post("/filter", {
          token: filtrarFavoritas ? token : null,
          names,
          gestion,
          carreras,
        });
        setMarkers(points);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [
    setMarkers,
    actualizarBusqueda,
    filtrarFavoritas,
    token,
    carreras,
    names,
    gestion,
  ]);
  const featureGroupRef = useRef(null);
  useEffect(() => {
    const bounds = featureGroupRef.current.getBounds();
    if (Object.keys(bounds).length) map.flyToBounds(bounds);
  }, [featureGroupRef, markers, map]);

  return (
    <FeatureGroup ref={featureGroupRef}>
      {displayMarkers &&
        markers.map((u) => {
          return (
            <Marker key={u.id_universidad} position={[u.Point.x, u.Point.y]}>
              <PopUp id_universidad={u.id_universidad} />
            </Marker>
          );
        })}
    </FeatureGroup>
  );
}
export default DisplayMarkers;
