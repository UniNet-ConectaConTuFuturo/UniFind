import PropTypes from "prop-types";
function Input({ handleChange, handleBlur, type, Name, value, span }) {
  return (
    <div className="inputbox -ml-16">
      <input
        className="typebox"
        type={type || "text"}
        name={Name}
        id={Name}
        placeholder=" "
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <span>{span}</span>
      <label htmlFor={Name}>Título Secundario</label>
    </div>
  );
}
Input.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  type: PropTypes.string,
  Name: PropTypes.string,
  value: PropTypes.string,
  span: PropTypes.string,
};
export default Input;
