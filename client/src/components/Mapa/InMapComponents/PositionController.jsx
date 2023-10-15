import { useMap, useMapEvents } from "react-leaflet";
const replaceUrl = (url) => window.history.replaceState(null, "", url);

function PositionController() {
  const map = useMap();
  function setParams() {
    const { lat, lng } = map.getCenter();
    const lvl = map.getZoom();
    replaceUrl(`/mapa/@${lat},${lng},${parseInt(lvl)}z` + location.search);
  }
  useMapEvents({
    zoomend: setParams,
    moveend: setParams,
  });
  return null;
}

export default PositionController;
