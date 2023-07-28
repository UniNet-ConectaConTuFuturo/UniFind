import { useMarkers } from "../../../../context/Markers/useMarkers";

function Gestion() {
  const { selectGestion } = useMarkers();
  return (
    <section className="w-1/3 mt-1 mx-4">
      <h3>Filtrar por Gestion</h3>
      <label>
        <span>
          <select
            name="carreras"
            className="w-full break-words text-xs"
            ref={selectGestion}
            defaultValue="0"
          >
            <option value="0">---</option>
            <option value="Publica">Público</option>
            <option value="Privada">Privado</option>
          </select>
        </span>
      </label>
    </section>
  );
}
export default Gestion;
