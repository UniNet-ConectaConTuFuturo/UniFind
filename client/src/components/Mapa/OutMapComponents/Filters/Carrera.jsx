import { get } from "../../../../api/api";
import { useEffect, useState } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";
import "./filters.css";
import { useGlobal } from "../../../../hooks/useGlobal";
import { useSearchParams } from "react-router-dom";

function Carrera() {
  const { setSearchParams } = useGlobal();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [defaultValue, setDefaultValue] = useState(null);
  const carreras = searchParams.get("carreras");
  useEffect(() => {
    (async () =>
      setDefaultValue(
        await get("/filter/default/carrera", {
          carreras,
        })
      ))();
  }, [carreras]);
  return (
    <>
      {defaultValue && (
        <AsyncCreatableSelect
          placeholder="Filtrar por Carrera"
          createOptionPosition="first"
          formatCreateLabel={(inputValue) => `${inputValue}...`}
          isValidNewOption={(inputValue) => (inputValue.trim() ? true : false)}
          cacheOptions
          defaultOptions
          defaultValue={defaultValue}
          isMulti
          closeMenuOnSelect={false}
          onChange={(options) =>
            setSearchParams(
              "carreras",
              options.map((o) => o.value)
            )
          }
          isLoading={isLoading}
          loadOptions={async (inputValue) => {
            try {
              setIsLoading(true);
              const res = await get("/filter/carrera", {
                inputValue,
              });
              setIsLoading(false);
              return res;
            } catch (error) {
              console.error(error);
            }
          }}
        />
      )}
    </>
  );
}
export default Carrera;
