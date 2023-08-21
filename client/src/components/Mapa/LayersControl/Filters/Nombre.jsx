import { useMapa } from "../../../../hooks/useMapa";
import { post } from "../../../../api/api";
import { useState } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";

function Nombre() {
  const { setNames } = useMapa();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <section className="relative w-1/3 mt-1 mx-4">
      <h3>Filtrar por Nombre</h3>
      <label>
        <span>
          <AsyncCreatableSelect
            createOptionPosition="first"
            cacheOptions
            defaultOptions
            isMulti
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
        </span>
      </label>
    </section>
  );
}
export default Nombre;
