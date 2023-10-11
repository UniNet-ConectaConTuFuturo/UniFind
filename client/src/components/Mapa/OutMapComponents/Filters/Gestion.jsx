import Select from "react-select";
import { useGlobal } from "../../../../hooks/useGlobal";
import { useSearchParams } from "react-router-dom";

const gestionOptions = [
  { value: "Publica", label: "Pública" },
  { value: "Privada", label: "Privada" },
];
function Gestion() {
  const { setSearchParams } = useGlobal();
  const [searchParams] = useSearchParams();
  const gestion = searchParams.get("gestion");
  return (
    <Select
      placeholder="Filtrar por Gestion"
      defaultValue={gestionOptions.find((option) => option.value === gestion)}
      onChange={(option) =>
        setSearchParams("gestion", option ? option.value : null)
      }
      isClearable
      options={gestionOptions}
    />
  );
}

export default Gestion;
