import provincias from "../../../geoJSON/provincia.json";
import { GeoJSON, Pane, useMap } from "react-leaflet";
import onEachFeature from "../../../api/onEachFeature/highlight";
import PropTypes from "prop-types";
function DisplayProvincias({ children }) {
  const className = {
      fillOpacity: 0,
      color: "#aaa",
      opacity: 1,
      weight: 2,
      lineJoin: "round",
    },
    map = useMap();
  return (
    <GeoJSON
      style={className}
      onEachFeature={(f, l) => onEachFeature(f, l, className, map)}
      data={provincias["features"]}
    >
      <Pane name="departamentos">{children}</Pane>
    </GeoJSON>
  );
}
DisplayProvincias.propTypes = {
  children: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
};
export default DisplayProvincias;
