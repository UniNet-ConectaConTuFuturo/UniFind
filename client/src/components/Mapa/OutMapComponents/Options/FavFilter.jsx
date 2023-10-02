import { useMapa } from "../../../../hooks/useMapa";

function FavFilter() {
  const { setFiltrarFavoritas } = useMapa();
  return (
    <>
      <label htmlFor="fav">Filtrar favoritas </label>
      <input
        type="checkbox"
        name="fav"
        id="fav"
        onChange={(e) => setFiltrarFavoritas(e.target.checked)}
      />
    </>
  );
}

export default FavFilter;
