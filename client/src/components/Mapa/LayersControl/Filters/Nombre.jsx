/* eslint-disable react/prop-types */
import { useMapa } from "../../../../hooks/useMapa";
import { post } from "../../../../api/api";
import { useState } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";
import { components } from "react-select";

function Nombre() {
  const { setNames } = useMapa();
  const [isLoading, setIsLoading] = useState(false);
  const MultiValueContainer = (props) => {
    const regExInParenthesis = /\(.+?\)/;
    const { label, title } = props.data;
    const parentesis = label.match(regExInParenthesis);
    const acronimo = parentesis ? parentesis[0].slice(1, -1) : label;
    const nombreCompleto = parentesis
      ? label.slice(0, label.indexOf(parentesis[0]))
      : title || label;
    props.data.label = acronimo;
    props.data.title = nombreCompleto;
    return (
      <span title={nombreCompleto}>
        <components.MultiValueContainer {...props} />
      </span>
    );
  };

  return (
    <section className="relative w-1/3 mt-1 mx-4">
      {/* <h3>Filtrar por Nombre</h3> */}
      <label>
        <span>
          <AsyncCreatableSelect
            placeholder="Filtrar por Nombre"
            createOptionPosition="first"
            formatCreateLabel={(inputValue) => `${inputValue}...`}
            cacheOptions
            defaultOptions
            isMulti
            components={{ MultiValueContainer }}
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
