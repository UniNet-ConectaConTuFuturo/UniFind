import { useMapa } from "../../../../hooks/useMapa";
import Select from "react-select";

const gestionOptions = [
  { value: "Publica", label: "Pública" },
  { value: "Privada", label: "Privada" },
];
function Gestion() {
  const { setGestion } = useMapa();
  return (
    <Select
      placeholder="Filtrar por Gestion"
      onChange={(option) => setGestion(option ? option.value : null)}
      isClearable
      options={gestionOptions}
    />
  );
}

export default Gestion;
