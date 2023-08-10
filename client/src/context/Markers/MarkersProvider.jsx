import { MarkersContext } from "./MarkersContext";
import { useState, useRef, useReducer } from "react";
import PropTypes from "prop-types";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.value];

    case "delete":
      return state.filter((n) => n != action.value);

    case "addSome": {
      const addition = action.nombres.filter(
        (u) => !state.some((N) => u.nombre_universidad === N)
      );
      return [...state, ...addition];
    }

    case "deleteAll":
      return [];
  }
  throw Error("Unknown action: " + action.type);
}

function MarkersProvider({ children }) {
  /* Mark Options */
  const distanciaMarcadores = useRef(6.5);
  const [displayMarkers, setDisplayMarkers] = useState(false);
  const [markers, setMarkers] = useState([]);

  /* Mark filters */
  const [carreras, dispatchCarreras] = useReducer(reducer, []);
  const [names, dispatchNames] = useReducer(reducer, []);
  const [gestion, setGestion] = useState(null);

  /* Mark Info */
  const [displayInfo, setDisplayInfo] = useState(false);
  const [uniToDisplay, setUniToDisplay] = useState("");

  return (
    <MarkersContext.Provider
      value={{
        distanciaMarcadores,
        displayMarkers,
        markers,
        setMarkers,
        setDisplayMarkers,
        carreras,
        dispatchCarreras,
        names,
        dispatchNames,
        gestion,
        setGestion,
        displayInfo,
        setDisplayInfo,
        uniToDisplay,
        setUniToDisplay,
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
