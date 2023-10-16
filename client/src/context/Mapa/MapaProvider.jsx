import { MapaContext } from "./MapaContext";
import { useReducer, useRef, useState } from "react";
import PropTypes from "prop-types";

function MapaProvider({ children }) {
  /* Mark Options */
  const [actualizarBusqueda, dispatchBusqueda] = useReducer(
    (state) => state + 1,
    0
  );
  const [displayMarkers, setDisplayMarkers] = useState(true);

  /* Opciones */
  const [markerSize, setMarkerSize] = useState(0.75);
  const autoZoom = useRef(false);
  const [filtrarFavoritas, setFiltrarFavoritas] = useState(false);

  /* Mark Info */
  const [idUniToShowInfo, setIdUniToShowInfo] = useState(0);

  /* Geo Info */
  const depInfo = useRef("");
  const provInfo = useRef("");

  return (
    <MapaContext.Provider
      value={{
        displayMarkers,
        setDisplayMarkers,
        actualizarBusqueda,
        dispatchBusqueda,
        markerSize,
        setMarkerSize,
        filtrarFavoritas,
        setFiltrarFavoritas,
        autoZoom,
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
