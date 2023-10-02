import { useMap } from "react-leaflet";
import GeoJsonContext from "./GeoJsonContext";
import PropTypes from "prop-types";
import { useMapa } from "../../../hooks/useMapa";
import { capitalizeFirst } from "../../../api/TextFunctions";
import { useRef } from "react";

function GeoJsonProvider({ children }) {
  const map = useMap();
  const depRef = useRef(null);
  const { depInfo, provInfo } = useMapa();
  /* const getLatDistance = ({ _northEast, _southWest }) =>
    Math.abs(_northEast.lat - _southWest.lat);
  const getLngDistance = ({ _northEast, _southWest }) =>
    Math.abs(_northEast.lng - _southWest.lng);
  function borderView(layer) {
    const layerBounds = layer._bounds;
    const mapBounds = map.getBounds();
    const latLayer = getLatDistance(layerBounds);
    const lngLayer = getLngDistance(layerBounds);
    const latMap = getLatDistance(mapBounds);
    const lngMap = getLngDistance(mapBounds);
    return latMap >= latLayer || lngMap >= lngLayer;
  }
  function lookFeature(layer, geoRef) {
    if (borderView(layer)) {
      geoRef.current.interactive = true
      //interactive = true;
    } else {
      //interactive = false;
      resetHighlight(layer, geoRef);
      geoRef.current.interactive = false
    }
  } */
  function highlightFeature(feature, layer) {
    layer.setStyle({
      weight: 5,
      color: "#666",
      fillOpacity: 0.7,
    });
    colorizar(feature, layer);
    layer.bringToFront();
  }
  function resetHighlight(layer, geoRef) {
    geoRef.current.resetStyle(layer);
  }
  function zoomToFeature(layer) {
    map.flyToBounds(layer.getBounds());
  }
  function colorizar(feature, layer) {
    if (feature.properties && feature.properties.color) {
      layer.setStyle({
        weight: 5,
        color: feature.properties.color,
        fillOpacity: 0.7,
      });
    }
  }
  function setGeoInfo(feature) {
    provInfo.current.textContent = capitalizeFirst(
      feature.properties.nam || feature.properties.provincia
    );
    depInfo.current.textContent = capitalizeFirst(
      feature.properties.departamento || ""
    );
  }

  function clearGeoInfo() {
    depInfo.current.textContent = capitalizeFirst("");
    provInfo.current.textContent = capitalizeFirst("");
  }
  function onEachFeature(feature, layer, geoRef) {
    layer.on({
      mouseover: (e) => {
        /* if (interactive) */ highlightFeature(e.target.feature, e.target);
        setGeoInfo(e.target.feature);
      },
      mouseout: (e) => {
        /* if (interactive) */ resetHighlight(e.target, geoRef);
        clearGeoInfo();
      },
      click: (e) => {
        /* if (interactive) */ zoomToFeature(e.target);
      },
    });
  }
  return (
    <GeoJsonContext.Provider
      value={{ depRef, onEachFeature /* , lookFeature, borderView */ }}
    >
      {children}
    </GeoJsonContext.Provider>
  );
}
GeoJsonProvider.propTypes = {
  children: PropTypes.any,
};
export default GeoJsonProvider;
