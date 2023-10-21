/* eslint-disable react/prop-types */
import { get } from "../../../../api/api";
import { useEffect, useState } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";
import MultiValueLabel from "./Custom/MultiValueLabel";
import { useOutletContext, useSearchParams } from "react-router-dom";

function Nombre() {
  const { setSearchParams } = useOutletContext();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [defaultValue, setDefaultValue] = useState(null);
  const names = searchParams.get("names");
  useEffect(() => {
    (async () =>
      setDefaultValue(
        await get("/filter/default/uni", {
          names,
        })
      ))();
  }, [names]);
  return (
    <>
      {defaultValue && (
        <AsyncCreatableSelect
          placeholder="Filtrar por Nombre"
          createOptionPosition="first"
          formatCreateLabel={(inputValue) => `${inputValue}...`}
          cacheOptions
          defaultOptions
          defaultValue={defaultValue}
          isMulti
          components={{ MultiValueLabel }}
          /* closeMenuOnSelect={false} */
          onChange={(options) =>
            setSearchParams(
              "names",
              options.map((o) => o.value)
            )
          }
          isLoading={isLoading}
          loadOptions={async (inputValue) => {
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
          }}
        />
      )}
    </>
  );
}
export default Nombre;
