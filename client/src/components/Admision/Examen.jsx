import { post } from "../../api/api";

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
        <textarea defaultValue="Usted ha sido seleccionado para pasar a la etapa de segunda instancia.
          Para demostrar que merece estar en nuestra institución, deberá
          presentarse el X día a las X horas." className="w-full h-36 outline-1 resize-none text-black border-1 border-black mt-3 overflow-hidden"/>
        <button className="text-black">Generar Exámen</button>
        <button className="text-black" onClick={aceptarCarta}>Aceptar Carta</button>
        <button className="text-black" onClick={rechazarCarta}>Rechazar Carta</button>
      </form>
    </div>
  );
}

export default Examen;
