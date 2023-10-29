import { post } from "../../api/api";
import FileDownload from "./FileDownload";
import './estilos.css';

function Examen({ cartaName }) {
  const {id_usuario, nombreSoli} = cartaName
  const aceptarCarta = async()=>{
    try {
      await post("/cambio/aceptado", {id_usuario, estado: "aceptada"})
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  }
  const rechazarCarta = async()=>{
    try {
      await post("/cambio/rechazado", {id_usuario, estado: "rechazada"})
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  }
  const segundainstanciaCarta = async()=>{
    try {
      await post("/cambio/segundainstancia", {id_usuario, estado: "segunda instancia"})
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <div className="w-full">
      <form className="w-full full h-48">
        <p className="w-full h-36 outline-1 resize-none text-black border-1 border-black mt-3 overflow-hidden">Bienvenido al centro de mando. Aquí podrá: <br></br><ol><li > * Descargar la carta de la solicitud.<br></br></li><li>* Aceptar al Ingresante<br></br></li><li>* Rechazar al Ingresante<br></br></li><li>* Enviar al Ingresante a Segunda Instancia</li></ol></p>
        {/* <button className="text-black">Generar Exámen</button> */}
        <div className="botones w-full">
          <FileDownload />
          <button class="boton aceptar w-[20%]" onClick={aceptarCarta}>Aceptar Carta</button>
          <button class="boton rechazar w-[20%]" onClick={rechazarCarta}>Rechazar Carta</button>
          <button class="boton segunda-instancia w-[20%]" onClick={segundainstanciaCarta}>Segunda Instancia</button>
        </div>
    
      </form>
    </div>
  );
}

export default Examen;
