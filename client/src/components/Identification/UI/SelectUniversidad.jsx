import PropTypes from "prop-types";
import { useRef, useState } from "react";
import AsyncSelect from "react-select/async";

import { get } from "../../../api/api";
function SelectUniversidad({
  handleChange,
  handleBlur,
  id_universidad,
  spanUniversity,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const asyncLoadOptions = async (inputValue) => {
    try {
      setIsLoading(true);
      const res = await get("/filter/uni", {
        inputValue,
      });
      setIsLoading(false);
      return res;
    } catch (error) {
      console.error(error);
    }
  };
  const spanRef = useRef(null);
  const labelRef = useRef(null);
  return (
    <div className="inputbox relative my-3 border-b-2 border-b-white w-96">
      <AsyncSelect
        styles={{
          control: () => ({
            border: "none",
            backgroundColor: "transparent",
            outline: "none",
            color: "white",
          }),
          input: (base) => ({
            ...base,
            color: "white",
          }),
          singleValue: (base) => ({
            ...base,
            color: "white",
          }),
        }}
        components={{ DropdownIndicator: null, IndicatorSeparator: null }}
        name="id_universidad"
        placeholder=""
        defaultOptions
        menuPlacement="auto"
        onChange={(option) => {
          handleChange({
            target: {
              name: "id_universidad",
              value: option.value,
            },
          });
        }}
        onFocus={() => {
          spanRef.current.classList.add("input-focusing");
          labelRef.current.classList.add("input-focusing");
        }}
        onBlur={(e) => {
          if (!id_universidad) {
            spanRef.current.classList.remove("input-focusing");
            labelRef.current.classList.remove("input-focusing");
          }
          handleBlur(e);
        }}
        
        loadOptions={asyncLoadOptions}
        isLoading={isLoading}
      />
      <span ref={spanRef}>{spanUniversity}</span>
      <label
        ref={labelRef}
        htmlFor="id_universidad" /* className={labelSelectClass} */
      >
        Universidad
      </label>
    </div>
  );
}
SelectUniversidad.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  id_universidad: PropTypes.number,
  spanUniversity: PropTypes.string,
};
export default SelectUniversidad;
