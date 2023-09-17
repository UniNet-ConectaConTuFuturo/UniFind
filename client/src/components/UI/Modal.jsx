import "./modal.css";
import PropTypes from "prop-types";

function Modal({ trigger, setTrigger, children }) {
  return (
    <>
      {trigger && (
        <div className="popup z-50 fixed top-0 left-0 w-full h-screen flex justify-center items-center">
          <div className="popup-cont relative p-8 w-full bg-white">
            <button
              className="close absolute top-4 left-4 text-red-600"
              onClick={() => setTrigger(false)}
            >
              <b>Cerrar</b>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
Modal.propTypes = {
  trigger: PropTypes.bool,
  setTrigger: PropTypes.func,
  children: PropTypes.element,
};
export default Modal;
