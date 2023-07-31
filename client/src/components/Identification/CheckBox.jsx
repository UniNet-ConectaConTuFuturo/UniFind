import "./checkboxLogInUp.css";
import PropTypes from "prop-types";
function CheckBox({ value }) {
  const {
    setBgColor,
    setLoginVisible,
    setRegistroVisible,
    setClassLogin,
    setClassRegistro,
  } = value;
  const handleChange = ({ target }) => {
    if (target.checked) {
      setBgColor("");
      setClassLogin("-translate-x-1/2 opacity-0 ");
      setTimeout(() => {
        setLoginVisible(false);
        setRegistroVisible(true);
        setTimeout(() => setClassRegistro(""), "100");
      }, "700");
    } else {
      setBgColor("bg-sky-700");
      setClassRegistro("translate-x-1/2 opacity-0 ");
      setTimeout(() => {
        setRegistroVisible(false);
        setLoginVisible(true);
        setTimeout(() => setClassLogin(""), "100");
      }, "700");
    }
  };
  return (
    <div className="absolute left-0 right-1/2 bottom-0 top-0 flex items-center justify-center">
      <div className="button b2 flex text-center" id="button-10">
        <input type="checkbox" className="checkbox" onChange={handleChange} />
        <div className="knobs">
          <span>Iniciar Sesión</span>
        </div>
        <div className="layer"></div>
      </div>
    </div>
  );
}
CheckBox.propTypes = {
  value: PropTypes.shape({
    setBgColor: PropTypes.func,
    setLoginVisible: PropTypes.func,
    setRegistroVisible: PropTypes.func,
    setClassLogin: PropTypes.func,
    setClassRegistro: PropTypes.func,
  }),
};
export default CheckBox;
