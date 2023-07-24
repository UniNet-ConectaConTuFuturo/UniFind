import { GeoJSON, Pane } from "react-leaflet";
import pais from "../../../geoJSON/pais.json";
import PropTypes from "prop-types";
function DisplayPais({ children }) {
  const className = {
    fillOpacity: 0,
    color: "#fff",
    opacity: 1,
    weight: 3,
    lineJoin: "round",
  };
  return (
    <GeoJSON style={className} data={pais["features"]}>
      <Pane name="provincias">{children}</Pane>
    </GeoJSON>
  );
}
DisplayPais.propTypes = {
  children: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
};
export default DisplayPais;
