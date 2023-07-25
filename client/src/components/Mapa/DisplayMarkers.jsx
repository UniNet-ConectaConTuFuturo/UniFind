import json from "./markers.json";
import { LayerGroup, Marker, Popup } from "react-leaflet";

function DisplayMarkers() {
  return (
    <LayerGroup>
      {json.map((u) => {
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
