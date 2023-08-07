import { MarkersContext } from "./MarkersContext";
import { useState, useRef, useReducer } from "react";
import PropTypes from "prop-types";

import json from "../../api/markers/markers.json";

function MarkersProvider({ children }) {
  /* Mark Options */
  const distanciaMarcadores = useRef(6.5);
  const [displayMarkers, setDisplayMarkers] = useState(false);
  const [markers, setMarkers] = useState(json);

  /* Mark filters */
  const [carreras, setCarreras] = useState([]);
  const selectCarreras = useRef("");
  function reducerNombre(state, action) {
    switch (action.type) {
      case "add":
        return {
          array: [...state.array, action.value],
        };

      case "delete":
        return {
          array: state.array.filter((n) => n != action.value),
        };

      case "addSome": {
        const addition = json.filter(
          (u) =>
            u.nombre_universidad
              .toLowerCase()
              .includes(action.inputValue.toLowerCase()) &&
            !state.array.some((n) => u.nombre_universidad === n)
        );
        return {
          array: [...state.array, ...addition.map((u) => u.nombre_universidad)],
        };
      }
      case "deleteAll":
        return {
          array: [],
        };
    }
    throw Error("Unknown action: " + action.type);
  }
  const [names, dispatchNames] = useReducer(reducerNombre, { array: [] });
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
        setCarreras,
        selectCarreras,
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
