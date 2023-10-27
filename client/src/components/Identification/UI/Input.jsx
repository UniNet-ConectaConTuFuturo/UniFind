import PropTypes from "prop-types";
import { useId } from "react";
function Input({ handleChange, handleBlur, type, Name, value, span, label }) {
  const id = useId();
  return (
    <div className="inputbox relative my-3 border-b-2 border-b-white w-96">
      <input
        className="typebox px-2 min-w-full w-full h-10 outline-none border-none bg-transparent text-white"
        type={type || "text"}
        name={Name}
        id={id}
        placeholder=" "
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <span>{span}</span>
      <label htmlFor={id}>{label}</label>
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
