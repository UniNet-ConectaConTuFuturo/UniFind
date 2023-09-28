import { useMapa } from "../../../hooks/useMapa";
import { post } from "../../../api/api";
import { useState } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";
import "./filters.css";

function Carrera() {
  const { setCarreras } = useMapa();
  const [isLoading, setIsLoading] = useState(false);

  /* const customStyles = {
    menuPortal: base => ({
      ...base,
      fontSize: '13px'
  }),
    control: (base) => ({
      ...base,
      fontSize: '13px',
      paddingTop: '3px',
    }),
  }; */

  return (
    <section className="relative w-1/3 mt-1 mx-4">
      {/* <h3>Filtrar por Carrera</h3> */}
      <label>
        <span>
          <AsyncCreatableSelect
            placeholder="Filtrar por Carrera"
            createOptionPosition="first"
            formatCreateLabel={(inputValue) => `${inputValue}...`}
            isValidNewOption={(inputValue) =>
              inputValue.trim() ? true : false
            }
            cacheOptions
            defaultOptions
            isMulti
            closeMenuOnSelect={false}
            onChange={(options) => setCarreras(options.map((o) => o.value))}
            isLoading={isLoading}
            loadOptions={async (inputValue) => {
              try {
                setIsLoading(true);
                const res = await post("/filter/carrera", {
                  inputValue,
                });
                setIsLoading(false);
                return res;
              } catch (error) {
                console.error(error);
              }
            }}
          />
        </span>
      </label>
    </section>
  );
}
export default Carrera;
