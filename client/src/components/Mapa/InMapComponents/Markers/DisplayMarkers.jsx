import { FeatureGroup, useMap } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import { useMapa } from "../../../../hooks/useContexts";
import { get } from "../../../../api/api";

import MyMarker from "./MyMarker";
import { useOutletContext, useSearchParams } from "react-router-dom";

function DisplayMarkers() {
  const { token } = useOutletContext();
  const [searchParams] = useSearchParams();
  const { actualizarBusqueda, filtrarFavoritas, autoZoom } = useMapa();
  const [markers, setMarkers] = useState([]);
  const featureGroupRef = useRef(null);
  const map = useMap();

  useEffect(() => {
    if (!featureGroupRef || !autoZoom.current) return;
    const bounds = featureGroupRef.current.getBounds();
    if (Object.keys(bounds).length) {
      const newbounds = bounds.pad(0.1);
      map.flyToBounds(newbounds);
    }
  }, [featureGroupRef, markers, map, autoZoom]);
  useEffect(() => {
    (async () =>
      setMarkers(
        await get("/filter", {
          token: filtrarFavoritas ? token : null,
          names: searchParams.get("names"),
          gestion: searchParams.get("gestion"),
          carreras: searchParams.get("carreras"),
        })
      ))();
  }, [actualizarBusqueda, filtrarFavoritas, token, searchParams, setMarkers]);

  return (
    <FeatureGroup ref={featureGroupRef}>
      {markers.map((u) => (
        <MyMarker key={u.id_universidad} u={u} />
      ))}
    </FeatureGroup>
  );
}
export default DisplayMarkers;
