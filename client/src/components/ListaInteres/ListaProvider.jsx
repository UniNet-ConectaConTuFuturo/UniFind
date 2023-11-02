import { ListaContext } from "../../context/ListaContext";
import PropTypes from "prop-types";
import { useRef } from "react";

function ListaProvider({ children }) {
    const refButtonEnviarCarta = useRef(null)
    const refButtonConsultar = useRef(null)
    const refButtonVerCarreras = useRef(null)
    const refButtonVerEnMapa = useRef(null)
  return (
    <ListaContext.Provider
      value={{refButtonEnviarCarta,
        refButtonConsultar,
        refButtonVerCarreras,
        refButtonVerEnMapa
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