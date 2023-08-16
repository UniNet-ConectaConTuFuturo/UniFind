import { MarkersContext } from "./MarkersContext";
import { useState, useRef } from "react";
import PropTypes from "prop-types";

function MarkersProvider({ children }) {
  /* Mark Options */
  const distanciaMarcadores = useRef(6.5);
  const [displayMarkers, setDisplayMarkers] = useState(true);
  const [markers, setMarkers] = useState([]);

  /* Mark filters */
  const [carreras, setCarreras] = useState([]);
  const [names, setNames] = useState([]);
  const [gestion, setGestion] = useState(null);

  /* Mark Info */
  const [idUniToShowInfo, setIdUniToShowInfo] = useState(0);

  return (
    <MarkersContext.Provider
      value={{
        distanciaMarcadores,
        displayMarkers,
        markers,
        setMarkers,
        setDisplayMarkers,
        carreras,
        setCarreras,
        names,
        setNames,
        gestion,
        setGestion,
        idUniToShowInfo,
        setIdUniToShowInfo,
      }}
    >
      {children}
    </MarkersContext.Provider>
  );
}
MarkersProvider.propTypes = {
  children: PropTypes.any,
};
export default MarkersProvider;
