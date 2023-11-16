import { post } from "../../api/api";
import FileDownload from "./FileDownload";
import "./Examen.css";
import { message } from "antd";
import PropTypes from "prop-types";

function Examen({ id_usuario }) {
  console.log("user: ", id_usuario);
  const aceptarCarta = async () => {
    try {
      await post("/cambio/aceptado", { id_usuario, estado: "aceptada" });
    } catch {
      message.error("Ocurrio un error");
    }
  };
  const rechazarCarta = async () => {
    try {
      await post("/cambio/rechazado", { id_usuario, estado: "rechazada" });
    } catch {
      message.error("Ocurrio un error");
    }
  };
  const segundainstanciaCarta = async () => {
    try {
      await post("/cambio/segundainstancia", {
        id_usuario,
        estado: "segunda instancia",
      });
    } catch {
      message.error("Ocurrio un error");
    }
  };
  return (
    <div className="w-full">
      <form className="w-full full h-48">
        <p className="w-full h-36 outline-1 resize-none text-black border-1 border-black mt-3 overflow-hidden">
          Carta de Pepito:
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A vero
          recusandae voluptates consectetur error? Vel tempora praesentium sunt
          ratione molestias, aliquam consequuntur accusamus sint beatae quo
          nihil quam, consequatur autem!
        </p>
        {/* <button className="text-black">Generar Exámen</button> */}
        <div className="botones w-full">
          <FileDownload />
          <button className="boton aceptar w-[20%]" onClick={aceptarCarta}>
            Aceptar
          </button>
          <button className="boton rechazar w-[20%]" onClick={rechazarCarta}>
            Rechazar
          </button>
          <button
            className="boton segunda-instancia w-[20%]"
            onClick={segundainstanciaCarta}
          >
            Segunda Instancia
          </button>
        </div>
      </form>
    </div>
  );
}
Examen.propTypes = {
  id_usuario: PropTypes.number,
};
export default Examen;
