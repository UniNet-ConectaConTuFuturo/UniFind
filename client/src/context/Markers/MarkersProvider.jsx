import { MarkersContext } from "./MarkersContext";
import { useReducer, useState } from "react";
import PropTypes from "prop-types";

function MarkersProvider({ children }) {
  /* Mark Options */
  const [distanciaMarcadores, setDistanciaMarcadores] = useState(6.5);
  const [displayMarkers, setDisplayMarkers] = useState(true);
  const [markers, setMarkers] = useState([]);

  /* Mark filters */
  const [actualizarBusqueda, dispatchBusqueda] = useReducer(
    (state) => state + 1,
    0
  );
  const [filtrarFavoritas, setFiltrarFavoritas] = useState(false);
  const [carreras, setCarreras] = useState([]);
  const [names, setNames] = useState([]);
  const [gestion, setGestion] = useState(null);

  /* Mark Info */
  const [idUniToShowInfo, setIdUniToShowInfo] = useState(0);

  return (
    <MarkersContext.Provider
      value={{
        distanciaMarcadores,
        setDistanciaMarcadores,
        displayMarkers,
        markers,
        setMarkers,
        setDisplayMarkers,
        actualizarBusqueda,
        dispatchBusqueda,
        filtrarFavoritas,
        setFiltrarFavoritas,
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
