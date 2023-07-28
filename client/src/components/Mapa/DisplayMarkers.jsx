import { LayerGroup, Marker, Popup, useMapEvent } from "react-leaflet";
import { useMarkers } from "../../context/Markers/useMarkers";
import { useEffect } from "react";
import setMarkersWithFilters from "../../api/markers/filter";
import setAside from "../../api/markers/setAside";

function DisplayMarkers() {
  const {
    distanciaMarcadores,
    displayMarkers,
    setDisplayMarkers,
    markers,
    setMarkers,
    carreras,
    nombres,
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
    setMarkersWithFilters(setMarkers, nombres, gestion);
  }, [setMarkers, carreras, nombres, gestion]);

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
