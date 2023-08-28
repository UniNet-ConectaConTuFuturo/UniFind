import { useMapa } from "../../../../hooks/useMapa";
import Select from "react-select";

const gestionOptions = [
  { value: "Publica", label: "Pública" },
  { value: "Privada", label: "Privada" },
];
function Gestion() {
  const { setGestion } = useMapa();
  return (
    <section className="relative w-1/3 mt-1 mx-4">
      {/* <h3>Filtrar por Gestion</h3> */}
      <label>
        <span>
          <Select
            placeholder="Filtrar por Gestion"
            onChange={(option) => setGestion(option ? option.value : null)}
            isClearable
            options={gestionOptions}
          />
        </span>
      </label>
    </section>
  );
}

export default Gestion;
