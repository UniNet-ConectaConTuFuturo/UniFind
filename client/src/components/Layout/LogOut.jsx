import PropTypes from "prop-types";

function LogOut({ setToken, setTrigger }) {
  return (
    <section className="px-8">
      <h3 className="text-center font-bold p-4">
        ¿Estas seguro de cerrar sesión?
      </h3>
      <div className="flex justify-between">
        <button
          className="border rounded-sm p-2 w-40 bg-green-950 bg-opacity-80 hover:bg-green-500 font-bold text-black"
          onClick={() => setTrigger(false)}
        >
          No, cancelar
        </button>
        <button
          className="border rounded-sm p-2 w-40 bg-red-950 bg-opacity-80 hover:bg-red-500 font-bold text-black"
          onClick={() => setToken("")}
        >
          Si, cerrar sesión
        </button>
      </div>
    </section>
  );
}
LogOut.propTypes = {
  setToken: PropTypes.func,
  setTrigger: PropTypes.func,
};
export default LogOut;
