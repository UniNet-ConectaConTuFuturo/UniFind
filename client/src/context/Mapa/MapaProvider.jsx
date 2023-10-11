import { MapaContext } from "./MapaContext";
import { useReducer, useRef, useState } from "react";
import PropTypes from "prop-types";

function MapaProvider({ children }) {
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

  /* Mark Info */
  const [idUniToShowInfo, setIdUniToShowInfo] = useState(0);

  /* Geo Info */
  const depInfo = useRef("");
  const provInfo = useRef("");

  return (
    <MapaContext.Provider
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
        idUniToShowInfo,
        setIdUniToShowInfo,
        depInfo,
        provInfo,
      }}
    >
      {children}
    </MapaContext.Provider>
  );
}
MapaProvider.propTypes = {
  children: PropTypes.any,
};
export default MapaProvider;
