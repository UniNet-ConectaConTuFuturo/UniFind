function getLat({ _northEast, _southWest }) {
  return Math.abs(Math.abs(_northEast.lat) - Math.abs(_southWest.lat));
}
function getLng({ _northEast, _southWest }) {
  return Math.abs(Math.abs(_northEast.lng) - Math.abs(_southWest.lng));
}
export default function borderView(layer, map) {
  const layerBounds = layer._bounds;
  const mapBounds = map.getBounds();
  const latLayer = getLat(layerBounds);
  const lngLayer = getLng(layerBounds);
  const latMap = getLat(mapBounds);
  const lngMap = getLng(mapBounds);
  //console.log(latMap, latLayer);
  if (latMap >= latLayer || lngMap >= lngLayer) return true;
  else return false;
}
