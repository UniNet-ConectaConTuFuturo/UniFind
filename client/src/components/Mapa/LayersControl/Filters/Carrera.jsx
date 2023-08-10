import { useReducer } from "react";
import { useMarkers } from "../../../../context/Markers/useMarkers";
import reducerList from "../../../../api/listReducer";
import { get, post } from "../../../../api/api";
function Carrera() {
  const { carreras, dispatchCarreras } = useMarkers();
  const [list, dispatchList] = useReducer(reducerList, []);

  async function handleSearch({ target }) {
    try {
      target.value.trim() === ""
        ? dispatchList({
            type: "show", //All
            nombres: await get("/carrera/names"),
            filtrados: carreras,
            dispatch: dispatchCarreras,
          })
        : dispatchList({
            type: "show", //Some
            nombres: await post("/filter/carrera/names", {
              inputValue: target.value,
            }),
            filtrados: carreras,
            dispatch: dispatchCarreras,
          });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const inputValue = e.target.input.value;
      if (inputValue.trim() === "") {
        dispatchCarreras({ type: "deleteAll" });
      } else {
        dispatchCarreras({
          type: "addSome",
          nombres: await post("/mapa/getcarreras", {
            inputValue,
          }),
        });
      }
      dispatchList({ type: "hidden" });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="relative w-1/3 mt-1 mx-4">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h3>Filtrar por Carrera</h3>
        <label onMouseLeave={() => dispatchList({ type: "hidden" })}>
          <span>
            <input
              name="input"
              className="w-full break-words text-xs border border-black"
              type="search"
              defaultValue=""
              onMouseOver={handleSearch}
              onChange={handleSearch}
            />
            <div className="w-full break-words absolute bg-white zIndex-1000">
              {list}
            </div>
          </span>
        </label>
      </form>
    </section>
  );
}
export default Carrera;
