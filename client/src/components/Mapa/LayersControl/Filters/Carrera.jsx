import { useMarkers } from "../../../../context/Markers/useMarkers";
import { post } from "../../../../api/api";
import { useState } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";

function Carrera() {
  const { setCarreras } = useMarkers();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="relative w-1/3 mt-1 mx-4">
      <h3>Filtrar por Carrera</h3>
      <label>
        <span>
          <AsyncCreatableSelect
            createOptionPosition="first"
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
