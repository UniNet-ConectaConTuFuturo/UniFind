import { LayerGroup, Marker, Popup, useMapEvent } from "react-leaflet";
import { useMarkers } from "../../context/Markers/useMarkers";
import { useEffect } from "react";
import setMarkersWithFilters from "../../api/markers/filter";

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
                <button type="button">Ver Más...</button>
              </Popup>
            </Marker>
          );
        })}
    </LayerGroup>
  );
}
export default DisplayMarkers;
