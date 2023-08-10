import CheckboxOption from "../components/UI/CheckboxOption";

export default function reducerList(state, action) {
  switch (action.type) {
    case "hidden":
      return [];

    case "show": {
      return action.nombres.map((nombre, i) => (
        <CheckboxOption
          key={i}
          check={action.filtrados.some((filtrado) => nombre === filtrado)}
          nombre={nombre}
          dispatch={action.dispatch}
        />
      ));
    }
  }
  throw Error("Unknown action: " + action.type);
}
