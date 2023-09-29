import { useMap, useMapEvents } from "react-leaflet";
import GeoJsonContext from "./GeoJsonContext";
import PropTypes from "prop-types";


function GeoJsonProvider({ children }) {
  const map = useMap();
  let interactive = true;
  const getLatDistance = ({ _northEast, _southWest }) => Math.abs(_northEast.lat - _southWest.lat);
  const getLngDistance = ({ _northEast, _southWest }) => Math.abs(_northEast.lng - _southWest.lng);
  function borderView(layer) {
    const layerBounds = layer._bounds;
    const mapBounds = map.getBounds();
    const latLayer = getLatDistance(layerBounds);
    const lngLayer = getLngDistance(layerBounds);
    const latMap = getLatDistance(mapBounds);
    const lngMap = getLngDistance(mapBounds);
    /* console.log(latMap, latLayer);
    console.log(lngMap, lngLayer); */
    return (latMap >= latLayer || lngMap >= lngLayer)
  }
  function lookFeature(layer, className) {
    /* console.log(borderView(layer)); */
    if (borderView(layer)) {
      interactive = true;
    } else {
      interactive = false;
      layer.setStyle(className);
    }
  }
  function highlightFeature(feature, layer) {
    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });
    colorizar(feature, layer);
    layer.bringToFront();
  }
  function resetHighlight(layer, className) {
    layer.setStyle(className);
  }
  function zoomToFeature(layer) {
    map.flyToBounds(layer.getBounds());
  }
  function colorizar(feature, layer) {
    if (feature.properties && feature.properties.color) {
      layer.setStyle({
        weight: 5,
        color: feature.properties.color,
        dashArray: "",
        fillOpacity: 0.7,
      });
    }
  }
  function onEachFeature(feature, layer, className) {
    layer.on({
      mouseover: (e) => {
        lookFeature(e.target, className);
        if (interactive) highlightFeature(e.target.feature, e.target);
      },
      zoomend: (e) => lookFeature(e.target, className),
      mouseout: (e) => {
        if (interactive) resetHighlight(e.target, className);
      },
      click: (e) => {
        if (interactive) zoomToFeature(e.target);
      },
    });
  }
  return (
    <GeoJsonContext.Provider
      value={{onEachFeature, lookFeature, borderView}}
    >
        { children }
    </GeoJsonContext.Provider>
  );
}
GeoJsonProvider.propTypes = {
    children: PropTypes.any,
  };
export default GeoJsonProvider;
