import { FeatureGroup, useMap, useMapEvent } from "react-leaflet";
import { useMapa } from "../../../hooks/useMapa";
import { useEffect, useRef } from "react";

import * as api from "../../../api/api";
import { useGlobal } from "../../../hooks/useGlobal";
import MyMarker from "./MyMarker";

function DisplayMarkers() {
  console.log("DisplayMarkers");
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
  } = useMapa();
  const featureGroupRef = useRef(null);
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
  useEffect(() => {
    if (!featureGroupRef) return;
    const bounds = featureGroupRef.current.getBounds();
    if (Object.keys(bounds).length) {
      const newbounds = bounds.pad(0.1);
      map.flyToBounds(newbounds);
    }
  }, [featureGroupRef, markers, map]);
  return (
    <FeatureGroup ref={featureGroupRef}>
      {displayMarkers &&
        markers.map((u) => <MyMarker key={u.id_universidad} u={u} />)}
    </FeatureGroup>
  );
}
export default DisplayMarkers;
