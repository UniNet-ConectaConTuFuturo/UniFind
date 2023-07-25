import json from "./markers.json";
import { LayerGroup, Marker, Popup, useMapEvent } from "react-leaflet";
import PropTypes from "prop-types";

function DisplayMarkers({
  distanciaMarcadores,
  displayMarkers,
  setDisplayMarkers,
}) {
  useMapEvent("zoom", ({ target }) => {
    if (target._zoom >= distanciaMarcadores.current) {
      setDisplayMarkers(true);
    } else {
      setDisplayMarkers(false);
    }
  });
  return (
    <LayerGroup>
      {displayMarkers &&
        json.map((u) => {
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
DisplayMarkers.propTypes = {
  distanciaMarcadores: PropTypes.any,
  displayMarkers: PropTypes.bool,
  setDisplayMarkers: PropTypes.func,
};
export default DisplayMarkers;
