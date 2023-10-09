import PropTypes from "prop-types";
import { useRef, useState } from "react";
import AsyncSelect from "react-select/async";

import { post } from "../../../api/api";
import Control from "./SelectComponents/Control";
import DropdownIndicator from "./SelectComponents/DropdownIndicator";
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
      const res = await post("/filter/uni", {
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
    <div className="inputbox -ml-16">
      <AsyncSelect
        classNamePrefix="border-0  text-white"
        name="id_universidad"
        placeholder=""
        defaultOptions
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
        components={{
          DropdownIndicator,
          Control,
        }}
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
