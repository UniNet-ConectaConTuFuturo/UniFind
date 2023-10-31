import { ListaContext } from "./ListaContext";
import PropTypes from "prop-types";
import { useRef } from "react";

function ListaProvider({ children }) {
    const refButton1 = useRef(null)
  return (
    <ListaContext.Provider
      value={{refButton1
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