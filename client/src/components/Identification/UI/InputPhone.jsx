import PhoneInput from 'react-phone-input-2'
import PropTypes from "prop-types";
import { useId } from "react";
import { useRef } from 'react';
function InputPhone({ handleChange, handleBlur, Name, value, span, label }) {
  const id = useId();
  const spanRef = useRef(null);
  const labelRef = useRef(null);
  return (
    <div className="inputbox relative my-3 border-b-2 border-b-white w-96">
      <PhoneInput
        country="ar"
        containerClass='outline-none border-none'
        inputClass="typebox px-2 min-w-full w-full h-10 outline-none border-none shadow-none bg-transparent text-white"
        inputProps={{
          name: Name
        }}
        jumpCursorToEnd={true}
        specialLabel=""
        placeholder=""
        limitMaxLength={true}
        value={value}
        onChange={(phone) =>{
          console.log(phone);
          handleChange({ target: { name:Name, value: phone } })}}
        onFocus={() => {
          spanRef.current.classList.add("input-focusing");
          labelRef.current.classList.add("input-focusing");
        }}
        onBlur={(e) => {
          console.log(value);
          if (!value) {
            spanRef.current.classList.remove("input-focusing");
            labelRef.current.classList.remove("input-focusing");
          }
          handleBlur(e);
        }}
        
      />
      <span ref={spanRef}>{span}</span>
      <label ref={labelRef} htmlFor={id}>{label}</label>
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