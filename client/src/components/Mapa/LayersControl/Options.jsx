import { useRef } from "react";
import { useMap } from "react-leaflet";
import { useMarkers } from "../../../context/Markers/useMarkers";

function Options() {
  const { distanciaMarcadores, setDisplayMarkers } = useMarkers();
  const control = useRef(null);
  /* function onMouseOver() {
    control.current.className =
      "leaflet-control-layers  leaflet-control leaflet-control-layers-expanded";
  }
  function onMouseOut() {
    control.current.className = "leaflet-control-layers  leaflet-control";
  } */
  const map = useMap();
  function distanciaOnChange(e) {
    distanciaMarcadores.current = e.target.value;
    if (map.getZoom() >= e.target.value) setDisplayMarkers(true);
    else setDisplayMarkers(false);
  }
  return (
    <div className="leaflet-bottom left-48">
      <div
        className="leaflet-control-layers  leaflet-control leaflet-control-layers-expanded"
        aria-haspopup="true"
        /* onMouseOver={onMouseOver}
        onMouseOut={onMouseOut} */
        ref={control}
      >
        <a
          className="leaflet-control-layers-toggle"
          title="Layers"
          href="#"
          role="button"
        ></a>
        <section className="leaflet-control-layers-list">
          <div className="leaflet-control-layers-base"></div>
          <div
            className="leaflet-control-layers-separator"
            style={{ display: "none" }}
          ></div>
          <div className="leaflet-control-layers-overlays">
            <label>
              <span>
                <span>Marcadores:</span>
                <select
                  name="distancia"
                  defaultValue="6.5"
                  onChange={distanciaOnChange}
                >
                  <option value={13}>Muy cercano</option>
                  <option value={10}>Cercano</option>
                  <option value={6.5}>Intermedio</option>
                  <option value={0}>Lejano</option>
                </select>
              </span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Options;
