import { useMarkers } from "../../../../context/Markers/useMarkers";
import { post } from "../../../../api/api";

import AsyncCreatableSelect from "react-select/async-creatable";

function Nombre() {
  const { setNames } = useMarkers();

  return (
    <section className="relative w-1/3 mt-1 mx-4">
      <h3>Filtrar por Nombre</h3>
      <label>
        <span>
          <AsyncCreatableSelect
            cacheOptions
            defaultOptions
            isMulti
            closeMenuOnSelect={false}
            onChange={(options) => setNames(options.map((o) => o.value))}
            loadOptions={(inputValue) =>
              new Promise((resolve) =>
                resolve(
                  post("/filter/uni", {
                    inputValue,
                  })
                )
              )
            }
          />
        </span>
      </label>
    </section>
  );
}
export default Nombre;
