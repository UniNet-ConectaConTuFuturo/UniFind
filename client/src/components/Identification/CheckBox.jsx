import "./checkboxLogInUp.css";
import { useIdentification } from "../../hooks/useIdentification";
function CheckBox() {
  const { checkboxRef, handleCheckboxChange } = useIdentification();
  return (
    <div
      role="Boton"
      className="absolute left-0 right-1/2 bottom-0 top-0 flex items-center justify-center"
    >
      <div className="b2 flex relative text-center" id="button-10">
        <input
          type="checkbox"
          id="toggle-identification"
          ref={checkboxRef}
          className="checkbox"
          onChange={handleCheckboxChange}
        />
        <div className="knobs">
          <span>Iniciar Sesión</span>
        </div>
        <div className="layer"></div>
      </div>
    </div>
  );
}
export default CheckBox;
