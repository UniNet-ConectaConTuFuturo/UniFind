import { AdmisionContext } from "../../context/AdmisionContext";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

function AdmisionProvider({ children }) {
  //Modales
  const [popUpExamen, setPopUpExamen] = useState(false);
  const [idToShow, setIdToShow] = useState("");
  //Guía
  const refButtonVerSolicitud = useRef(null);
  return (
    <AdmisionContext.Provider
      value={{
        popUpExamen,
        setPopUpExamen,
        idToShow,
        setIdToShow,
        refButtonVerSolicitud,
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
