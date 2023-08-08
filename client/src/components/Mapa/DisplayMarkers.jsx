import { LayerGroup, Marker, Popup, useMapEvent } from "react-leaflet";
import { useMarkers } from "../../context/Markers/useMarkers";
import { useEffect } from "react";
import setAside from "../../api/markers/setAside";

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
    setDisplayInfo,
    setUniToDisplay,
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
        const res = await api.post("/mapa/getpoints", {
          names: names.array,
          gestion,
        });
        const arr = await res.json();
        setMarkers(arr);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setMarkers, carreras, names.array, gestion]);

  const handleClick = ({ target }) => {
    setAside(setUniToDisplay, target.dataset.key);
    setDisplayInfo(true);
  };

  return (
    <LayerGroup>
      {displayMarkers &&
        markers.map((u) => {
          return (
            <Marker key={u.id_universidad} position={[u.Point.x, u.Point.y]}>
              <Popup>
                <strong>{u.nombre_universidad}</strong>
                <br />
                <a href={u.maps_universidad} target="_blank" rel="noreferrer">
                  {u.direccion_universidad}, {u.localidad_universidad},{" "}
                  {u.zona_universidad}
                </a>
                <br />
                <button
                  data-key={u.id_universidad}
                  type="button"
                  onClick={handleClick}
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
