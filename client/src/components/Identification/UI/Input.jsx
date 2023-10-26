import PropTypes from "prop-types";
import { useId } from "react";
function Input({ handleChange, handleBlur, type, Name, value, span, label }) {
  const id = useId();
  return (
    <div className="inputbox relative my-4 border-b-2 border-b-black w-96">
      <input
        className="typebox px-2"
        type={type || "text"}
        name={Name}
        id={id}
        placeholder=" "
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <span>{span}</span>
      <label className="" htmlFor={id}>{label}</label>
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
  label: PropTypes.string,
};
export default Input;
