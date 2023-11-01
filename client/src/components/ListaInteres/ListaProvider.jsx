import { ListaContext } from "./ListaContext";
import PropTypes from "prop-types";
import { useRef } from "react";

function ListaProvider({ children }) {
    const refButton1 = useRef(null)
    const refButton2 = useRef(null)
    const refButton3 = useRef(null)
    const refButton4 = useRef(null)
  return (
    <ListaContext.Provider
      value={{refButton1,
        refButton2,
        refButton3,
        refButton4
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