import PropTypes from "prop-types";

function CheckboxOption({ check, nombre, dispatch }) {
  function handleCheckboxs(e, dispatch) {
    const value = e.target.value;
    e.target.checked
      ? dispatch({ type: "add", value })
      : dispatch({ type: "delete", value });
  }
  return (
    <label className="text-xs border border-black">
      <div className="flex">
        <input
          type="checkbox"
          defaultChecked={check}
          value={nombre}
          onClick={(e) => handleCheckboxs(e, dispatch)}
        />
        <span className="mx-auto">{nombre}</span>
      </div>
    </label>
  );
}
CheckboxOption.propTypes = {
  check: PropTypes.bool,
  nombre: PropTypes.string,
  dispatch: PropTypes.func,
};
export default CheckboxOption;
