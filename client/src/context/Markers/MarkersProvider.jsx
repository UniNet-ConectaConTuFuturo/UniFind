import { MarkersContext } from "./MarkersContext";
import { useState, useRef } from "react";
import PropTypes from "prop-types";

import json from "../../api/markers.json";

function MarkersProvider({ children }) {
  const distanciaMarcadores = useRef(6.5);
  const [displayMarkers, setDisplayMarkers] = useState(false);
  const [markers, setMarkers] = useState(json);

  const [carreras, setCarreras] = useState([]);
  const selectCarreras = useRef("");
  const [nombres, setNombres] = useState([]);
  const selectNombre = useRef("");
  const [gestion, setGestion] = useState("0");
  const selectGestion = useRef("0");
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
        selectCarreras,
        nombres,
        setNombres,
        selectNombre,
        gestion,
        setGestion,
        selectGestion,
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
