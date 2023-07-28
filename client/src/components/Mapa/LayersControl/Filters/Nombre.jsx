import markers from "../../../../api/markers.json";
import { useMarkers } from "../../../../context/Markers/useMarkers";
function Nombre() {
  const { nombres, setNombres, selectNombre } = useMarkers();
  function onDelete({ target }) {
    setNombres(nombres.filter((c, i) => i != target.dataset.key));
  }
  return (
    <section className="w-1/3 mt-1 mx-4">
      <h3>Filtrar por Nombre</h3>
      <label>
        <span>
          <select
            className="w-full break-words text-xs"
            name="nombres"
            ref={selectNombre}
            defaultValue=""
          >
            <option value="">---</option>
            {markers.map((u) => (
              <option key={u.id_universidad} value={u.nombre_universidad}>
                {u.nombre_universidad}
              </option>
            ))}
          </select>
        </span>
      </label>
      <article className="break-words">
        {nombres.map((c, i) => (
          <small className="border-black border m-1" key={i}>
            {c}
            <button data-key={i} onClick={onDelete}>
              ⌫
            </button>
          </small>
        ))}
      </article>
    </section>
  );
}
export default Nombre;
