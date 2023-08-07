import PropTypes from "prop-types";

function CheckboxOption({ check, nombre_universidad, handleCheckboxs }) {
  return (
    <label className="text-xs border border-black">
      <div className="flex">
        <input
          type="checkbox"
          defaultChecked={check}
          value={nombre_universidad}
          onClick={handleCheckboxs}
        />
        <span className="mx-auto">{nombre_universidad}</span>
      </div>
    </label>
  );
}
CheckboxOption.propTypes = {
  check: PropTypes.bool,
  nombre_universidad: PropTypes.string,
  handleCheckboxs: PropTypes.func,
};
export default CheckboxOption;
