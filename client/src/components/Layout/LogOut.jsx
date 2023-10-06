import PropTypes from "prop-types";
import { useGlobal } from "../../hooks/useGlobal";

function LogOut({setTrigger}) {
    const {setToken} = useGlobal();
  return (
    <section className="px-8">
      <h3 className="text-center font-bold p-4">
        ¿Estas seguro de cerrar sesión?
      </h3>
      <div className="flex justify-between">
        <button
          className="border rounded-sm p-2 bg-green-950 bg-opacity-80 hover:bg-opacity-95 font-bold text-black"
          onClick={() => setTrigger(false)}
        >
          No, cancelar
        </button>
        <button
          className="border rounded-sm p-2 bg-red-950 bg-opacity-80 hover:bg-opacity-95 font-bold text-black"
          onClick={() => setToken("")}
        >
          Si, cerrar sesión
        </button>
      </div>
    </section>
  );
}
LogOut.propTypes = {
    setTrigger: PropTypes.func,
  };
export default LogOut