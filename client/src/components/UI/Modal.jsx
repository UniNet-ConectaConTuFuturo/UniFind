import "./modal.css";
import PropTypes from "prop-types";

function Modal({ trigger, setTrigger, children }) {
  return (
    <>
      {trigger && (
        <div
          role="popup"
          className="z-50 fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black bg-opacity-75"
        >
          <div
            role="popup-cont"
            className="relative p-6 pt-10 w-fit max-w-xl bg-white rounded-sm"
          >
            <button
              className="close absolute top-2 left-2 text-sm font-bold text-red-600"
              onClick={() => setTrigger(false)}
            >
              Volver
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
