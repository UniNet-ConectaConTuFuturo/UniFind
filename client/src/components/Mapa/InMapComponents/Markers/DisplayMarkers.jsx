import { FeatureGroup, useMap, useMapEvent } from "react-leaflet";
import { useEffect, useRef } from "react";
import { useMapa } from "../../../../hooks/useMapa";
import { useGlobal } from "../../../../hooks/useGlobal";
import { post } from "../../../../api/api";

import MyMarker from "./MyMarker";
import { useSearchParams } from "react-router-dom";

function DisplayMarkers() {
  console.log("DisplayMarkers");
  const { token } = useGlobal();
  const [searchParams] = useSearchParams();
  const {
    distanciaMarcadores,
    displayMarkers,
    setDisplayMarkers,
    markers,
    setMarkers,
    actualizarBusqueda,
    filtrarFavoritas,
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
        console.log({
          token: filtrarFavoritas ? token : null,
          names: searchParams.get("names"),
          gestion: searchParams.get("gestion"),
          carreras: searchParams.get("carreras"),
        });
        const points = await post("/filter", {
          token: filtrarFavoritas ? token : null,
          names: searchParams.get("names"),
          gestion: searchParams.get("gestion"),
          carreras: searchParams.get("carreras"),
        });
        setMarkers(points);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setMarkers, actualizarBusqueda, filtrarFavoritas, token, searchParams]);
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
