import "./checkboxLogInUp.css";
import { useIngresante } from "../../context/Ingresante/useIngresante";
import { useEffect } from "react";
function CheckBox() {
  const {checkboxRef, handleCheckboxChange} = useIngresante()
  return (
    <div className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center">
      <div className="button b2 flex relative text-center" id="button-10">
        <input type="checkbox" ref={checkboxRef} className="checkbox" onChange={handleCheckboxChange} />
        <div className="knobs">
          <span>Iniciar Sesión</span>
        </div>
        <div className="layer"></div>
      </div>
    </div>
  );
}
export default CheckBox;
