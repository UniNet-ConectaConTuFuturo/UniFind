import { ListaContext } from "../../context/ListaContext";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

function ListaProvider({ children }) {
  //Modales
  const [popUpCarta, setPopUpCarta] = useState(false);
  const [popUpVerMas, setPopUpVerMas] = useState(false);
  const [idUniToShowInfo, setIdUniToShowInfo] = useState(0);
  //Guía
  const refButtonEnviarCarta = useRef(null);
  const refButtonConsultar = useRef(null);
  const refButtonVerCarreras = useRef(null);
  const refButtonVerEnMapa = useRef(null);

  return (
    <ListaContext.Provider
      value={{
        popUpCarta,
        setPopUpCarta,
        popUpVerMas,
        setPopUpVerMas,
        idUniToShowInfo,
        setIdUniToShowInfo,
        refButtonEnviarCarta,
        refButtonConsultar,
        refButtonVerCarreras,
        refButtonVerEnMapa,
      }}
    >
      {children}
    </ListaContext.Provider>
  );
}
ListaProvider.propTypes = {
  children: PropTypes.any,
};
export default ListaProvider;
