/* eslint-disable react/prop-types */
import { useMapa } from "../../../../hooks/useMapa";
import { post } from "../../../../api/api";
import { useState } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";
import MultiValueLabel from "./Custom/MultiValueLabel";

function Nombre() {
  const { setNames } = useMapa();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AsyncCreatableSelect
      placeholder="Filtrar por Nombre"
      createOptionPosition="first"
      formatCreateLabel={(inputValue) => `${inputValue}...`}
      cacheOptions
      defaultOptions
      isMulti
      components={{ MultiValueLabel }}
      closeMenuOnSelect={false}
      onChange={(options) => setNames(options.map((o) => o.value))}
      isLoading={isLoading}
      loadOptions={async (inputValue) => {
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
      }}
    />
  );
}
export default Nombre;
