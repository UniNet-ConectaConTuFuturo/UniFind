import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import PropTypes from "prop-types";
import { useId } from "react";
function InputPhone({ handleChange, handleBlur, Name, value, span, label }) {
  const id = useId();
  return (
    <div className="inputbox">
      <PhoneInput
        defaultCountry="AR"
        className="typebox px-2"
        
        limitMaxLength={true}
        value={value}
        onChange={(e) => handleChange({ target: { [Name]: e } })}
        onBlur={handleBlur}
        
      />
      <span>{span}</span>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
InputPhone.propTypes = {
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    Name: PropTypes.string,
    value: PropTypes.string,
    span: PropTypes.string,
    label: PropTypes.string,
  };
export default InputPhone