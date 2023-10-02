import { useMap } from "react-leaflet";

function ControlZoom() {
  const map = useMap();
  return (
    <section role="Zoom Control" className="leaflet-control-container">
      <div className="leaflet-bottom left-32">
        <div className="leaflet-control-zoom leaflet-bar leaflet-control">
          <a
            className="leaflet-control-zoom-in"
            href="#"
            title="Zoom in"
            role="button"
            aria-label="Zoom in"
            aria-disabled="false"
            onClick={()=>map.zoomIn()}
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
            onClick={()=>map.zoomOut()}
          >
            <span aria-hidden="true">−</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ControlZoom;
