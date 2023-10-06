import { MapaContext } from "./MapaContext";
import { useReducer, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams()
  const [carreras, setCarreras] = useState(searchParams.carreras || []);
  const [names, setNames] = useState(searchParams.names || []);
  const [gestion, setGestion] = useState(searchParams.gestion || null);

  /* Mark Info */
  const [idUniToShowInfo, setIdUniToShowInfo] = useState(0);

  /* Geo Info */
  const depInfo = useRef("");
  const provInfo = useRef("");
  /* useEffect(()=>{
    setSearchParams(new URLSearchParams(Object.assign(carreras, names, gestion)))
  },[carreras, setCarreras, setNames]) */

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
        carreras,
        setCarreras,
        names,
        setNames,
        gestion,
        setGestion,
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
