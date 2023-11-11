import "./modal.css";
import PropTypes from "prop-types";

function Modal({ trigger, setTrigger, children }) {
  return (
    <>
      {trigger && (
        <div className="popup z-50 fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-75">
          <div className="popup-cont relative p-6 pt-10 w-full max-w-xl bg-white rounded-sm">
            <button
              className="close absolute top-4 left-4 text-red-600"
              onClick={() => setTrigger(false)}
            >
              <b>Volver</b>
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
