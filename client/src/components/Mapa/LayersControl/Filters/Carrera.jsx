import PropTypes from "prop-types";

function Carrera({ carreras, setCarreras, selectCarreras }) {
  function onDelete({ target }) {
    setCarreras(carreras.filter((c, i) => i != target.dataset.key));
  }
  return (
    <section className="w-1/3 mt-1 mx-4">
      <h3>Filtrar por CARRERA</h3>
      <label>
        <span>
          <select
            name="carreras"
            className="w-full break-words text-xs"
            ref={selectCarreras}
            defaultValue=""
          >
            <option value="">---</option>
            <option value="Mates">Mates</option>
            <option value="Lengua">Lengua</option>
            <option value="Psycologia">Psycologia</option>
            <option value="Artes">Artes</option>
          </select>
        </span>
      </label>
      <article className="break-words">
        {carreras.map((c, i) => (
          <small className="border-black border m-1" key={i}>
            {c}{" "}
            <button data-key={i} onClick={onDelete}>
              ⌫
            </button>
          </small>
        ))}
      </article>
    </section>
  );
}
Carrera.propTypes = {
  carreras: PropTypes.array,
  setCarreras: PropTypes.func,
  selectCarreras: PropTypes.any,
};
export default Carrera;
