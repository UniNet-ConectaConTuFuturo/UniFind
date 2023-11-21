import { AdmisionContext } from "../../context/AdmisionContext";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

function AdmisionProvider({ children }) {
  //Modales
  const [popUpExamen, setPopUpExamen] = useState(false);
  const [userToShow, setUserToShow] = useState("");
  //Guía
  const refButtonVerSolicitud = useRef(null);
  return (
    <AdmisionContext.Provider
      value={{
        popUpExamen,
        setPopUpExamen,
        userToShow,
        setUserToShow,
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
