import PropTypes from "prop-types";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import { post } from "../../../api/api";
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
  const [labelSelectClass, setLabelSelectClass] = useState("");
  return (
    <div className="inputbox -ml-16">
      <AsyncSelect
        classNamePrefix="border-0 bg-transparent text-white"
        name="id_universidad"
        inputId="id_universidad"
        placeholder=""
        cacheOptions
        defaultOptions
        onChange={(option) => {
          const target = {
            name: "id_universidad",
            value: option ? option.value : "",
          };
          handleChange({ target });
          handleBlur({ target });
        }}
        onFocus={() => setLabelSelectClass("force-input-focus")}
        onBlur={() => {
          if (id_universidad === "") setLabelSelectClass("");
        }}
        loadOptions={asyncLoadOptions}
        isLoading={isLoading}
      />
      <span className={labelSelectClass}>{spanUniversity}</span>
      <label htmlFor="id_universidad" className={labelSelectClass}>
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
