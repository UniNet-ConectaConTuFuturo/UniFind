import { useReducer } from "react";
import { useMarkers } from "../../../../context/Markers/useMarkers";
import reducerList from "../../../../api/listReducer";
import { get, post } from "../../../../api/api";
function Nombre() {
  const { names, dispatchNames } = useMarkers();
  const [list, dispatchList] = useReducer(reducerList, []);

  async function handleSearch({ target }) {
    target.value.trim() === ""
      ? dispatchList({
          type: "show", //all
          nombres: await get("/uni/names"),
          filtrados: names,
          dispatch: dispatchNames,
        })
      : dispatchList({
          type: "show", //some
          nombres: await post("/filter/uni/names", {
            inputValue: target.value,
          }),
          filtrados: names,
          dispatch: dispatchNames,
        });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const inputValue = e.target.input.value;
    if (inputValue.trim() === "") {
      dispatchNames({ type: "deleteAll" });
    } else {
      dispatchNames({
        type: "addSome",
        nombres: await post("/mapa/getnames", {
          inputValue,
        }),
      });
    }
    dispatchList({ type: "hidden" });
  }
  return (
    <section className="relative w-1/3 mt-1 mx-4">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h3>Filtrar por Nombre</h3>
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
export default Nombre;

/* case "showSomeTrue":
        return {
          checkboxs: markers.map((u) => {
            if (
              u.nombre_universidad
                .toLowerCase()
                .includes(action.inputValue.toLowerCase())
            ) {
              return (
                <CheckboxOption
                  key={u.id_universidad}
                  check={true}
                  nombre_universidad={u.nombre_universidad}
                  handleCheckboxs={handleCheckboxs}
                />
              );
            }
          }),
        };

      case "showAllFalse":
        return {
          checkboxs: markers.map((u) => {
            return (
              <CheckboxOption
                key={u.id_universidad}
                check={false}
                nombre_universidad={u.nombre_universidad}
                handleCheckboxs={handleCheckboxs}
              />
            );
          }),
        }; */
