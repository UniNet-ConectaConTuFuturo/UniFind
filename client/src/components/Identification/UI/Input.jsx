import PropTypes from "prop-types";
import { useId } from "react";
function Input({ handleChange, handleBlur, type, Name, value, span }) {
  const id = useId();
  return (
    <div className="inputbox -ml-16">
      <input
        className="typebox"
        type={type || "text"}
        name={Name}
        id={id}
        placeholder=" "
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <span>{span}</span>
      <label htmlFor={id}>Título Secundario</label>
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
