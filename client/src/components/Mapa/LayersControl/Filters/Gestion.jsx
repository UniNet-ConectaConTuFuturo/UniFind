import PropTypes from "prop-types";

function Gestion({ selectGestion }) {
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
            <option value="1">Público</option>
            <option value="2">Privado</option>
          </select>
        </span>
      </label>
    </section>
  );
}
Gestion.propTypes = {
  selectGestion: PropTypes.any,
};
export default Gestion;
