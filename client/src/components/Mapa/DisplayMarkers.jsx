import { LayerGroup, Marker, Popup, useMapEvent } from "react-leaflet";
import { useMarkers } from "../../context/Markers/useMarkers";
import { useEffect } from "react";

import * as api from "../../api/api";

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
    setIdUniToShowInfo,
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
  function handleFavorito() {}
  return (
    <LayerGroup>
      {displayMarkers &&
        markers.map((u) => {
          return (
            <Marker key={u.id_universidad} position={[u.Point.x, u.Point.y]}>
              <Popup>
                <button
                  value={u.id_universidad}
                  type="button"
                  onClick={({ target }) => setIdUniToShowInfo(target.value)}
                >
                  Ver Más...
                </button>
                <strong>{u.nombre_universidad}</strong>
                <br />
                <a href={u.maps_universidad} target="_blank" rel="noreferrer">
                  {u.direccion_universidad}, {u.localidad_universidad},{" "}
                  {u.zona_universidad}
                </a>
                <br />
                <button
                  value={u.id_universidad}
                  type="button"
                  onClick={({ target }) => setIdUniToShowInfo(target.value)}
                >
                  Ver Más...
                </button>
              </Popup>
            </Marker>
          );
        })}
    </LayerGroup>
  );
}
export default DisplayMarkers;
