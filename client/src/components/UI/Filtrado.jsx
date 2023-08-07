import PropTypes from "prop-types";
function Filtrado({ texto, handleClick }) {
  return (
    <small className="border-black border rounded-sm m-1">
      {texto}
      <button value={texto} onClick={handleClick}>
        ⌫
      </button>
    </small>
  );
}
Filtrado.propTypes = {
  texto: PropTypes.string,
  handleClick: PropTypes.func,
};
export default Filtrado;
