import { AdmisionContext } from "../../context/AdmisionContext";
import PropTypes from "prop-types";
import { useRef } from "react";

function AdmisionProvider({ children }) {
    const refButtonVerSolicitud = useRef(null)
  return (
    <AdmisionContext.Provider
      value={{refButtonVerSolicitud
      }}
    >
      {children}
    </AdmisionContext.Provider>
  );
}
AdmisionProvider.propTypes = {
  children: PropTypes.any,
};
export default AdmisionProvider;