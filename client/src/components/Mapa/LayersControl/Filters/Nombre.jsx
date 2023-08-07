import { useReducer } from "react";
import markers from "../../../../api/markers/markers.json";
import { useMarkers } from "../../../../context/Markers/useMarkers";
import CheckboxOption from "../../../UI/CheckboxOption";
function Nombre() {
  const { names, dispatchNames } = useMarkers();
  function reducerList(state, action) {
    switch (action.type) {
      case "hidden":
        return { array: [] };

      case "showAll":
        return {
          array: markers.map((u) => (
            <CheckboxOption
              key={u.id_universidad}
              check={names.array.some((n) => u.nombre_universidad === n)}
              nombre_universidad={u.nombre_universidad}
              handleCheckboxs={handleCheckboxs}
            />
          )),
        };

      case "showSome":
        return {
          array: markers.map((u) => {
            if (
              u.nombre_universidad
                .toLowerCase()
                .includes(action.inputValue.toLowerCase())
            ) {
              return (
                <CheckboxOption
                  key={u.id_universidad}
                  check={names.array.some((n) => u.nombre_universidad === n)}
                  nombre_universidad={u.nombre_universidad}
                  handleCheckboxs={handleCheckboxs}
                />
              );
            }
          }),
        };

      /* case "showSomeTrue":
        return {
          array: markers.map((u) => {
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
          array: markers.map((u) => {
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
    }
    throw Error("Unknown action: " + action.type);
  }
  const [list, dispachList] = useReducer(reducerList, { array: [] });
  function handleCheckboxs(e) {
    const value = e.target.value;
    e.target.checked
      ? dispatchNames({ type: "add", value })
      : dispatchNames({ type: "delete", value });
  }
  function handleSearch({ target }) {
    target.value.trim() === ""
      ? dispachList({ type: "showAll" })
      : dispachList({ type: "showSome", inputValue: target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.input.value.trim() === "") {
      /* dispachList({ type: "showAllFalse" }); */ // No work
      dispatchNames({ type: "deleteAll" });
    } else {
      const inputValue = e.target.input.value;
      /* dispachList({ type: "showSomeTrue", inputValue }); */ // No work
      dispatchNames({ type: "addSome", inputValue });
    }
    dispachList({ type: "hidden" });
  }
  return (
    <section className="relative w-1/3 mt-1 mx-4">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h3>Filtrar por Nombre</h3>
        <label onMouseLeave={() => dispachList({ type: "hidden" })}>
          <span>
            <input
              name="input"
              className="w-full break-words text-xs border border-black"
              type="search"
              onMouseOver={handleSearch}
              onChange={handleSearch}
            />
            <div className="w-full break-words absolute bg-white zIndex-1000">
              {list.array}
            </div>
          </span>
        </label>
      </form>
    </section>
  );
}
export default Nombre;
