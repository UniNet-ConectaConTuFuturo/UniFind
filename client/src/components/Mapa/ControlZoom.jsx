import { useMap } from "react-leaflet";

function ControlZoom() {
  const map = useMap();
  function zoomIn() {
    map.setZoom(map.getZoom() + map.options.zoomSnap);
  }
  function zoomOut() {
    map.setZoom(map.getZoom() - map.options.zoomSnap);
  }
  return (
    <div className="leaflet-control-container">
      <div className="leaflet-bottom left-36">
        <div className="leaflet-control-zoom leaflet-bar leaflet-control">
          <a
            className="leaflet-control-zoom-in"
            href="#"
            title="Zoom in"
            role="button"
            aria-label="Zoom in"
            aria-disabled="false"
            onClick={zoomIn}
          >
            <span aria-hidden="true">+</span>
          </a>
          <a
            className="leaflet-control-zoom-out"
            href="#"
            title="Zoom out"
            role="button"
            aria-label="Zoom out"
            aria-disabled="false"
            onClick={zoomOut}
          >
            <span aria-hidden="true">−</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ControlZoom;
