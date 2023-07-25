import PropTypes from "prop-types";
import Options from "./LayersControl/Options";
import Filters from "./LayersControl/Filters";

function ControlLayers({ distanciaMarcadores, setDisplayMarkers }) {
  return (
    <div>
      <Options
        distanciaMarcadores={distanciaMarcadores}
        setDisplayMarkers={setDisplayMarkers}
      />
      <Filters />
    </div>
  );
}
ControlLayers.propTypes = {
  distanciaMarcadores: PropTypes.any,
  setDisplayMarkers: PropTypes.func,
};
export default ControlLayers;
