import { MapaContext } from "./MapaContext";
import { useReducer, useRef, useState } from "react";
import PropTypes from "prop-types";

function MapaProvider({ children }) {
  /* Mark Options */
  const [actualizarBusqueda, dispatchBusqueda] = useReducer(
    (state) => state + 1,
    0
  );

  /* Opciones */
  const [markerSize, setMarkerSize] = useState(0.75);
  const autoZoom = useRef(false);
  const [filtrarFavoritas, setFiltrarFavoritas] = useState(false);

  /* Geo Info */
  const depInfo = useRef("");
  const provInfo = useRef("");

  return (
    <MapaContext.Provider
      value={{
        actualizarBusqueda,
        dispatchBusqueda,
        markerSize,
        setMarkerSize,
        filtrarFavoritas,
        setFiltrarFavoritas,
        autoZoom,
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
