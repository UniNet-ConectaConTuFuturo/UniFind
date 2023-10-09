import { useState } from "react";
import { useGlobal } from "../../hooks/useGlobal";
import { useEffect } from "react";
import { post } from "../../api/api";
//Components
import Interesado from "./Interesado";
import Examen from "./Examen";
import Modal from "../UI/Modal";
//CSS
import "../ListaInteres/ListaInteres.css";

function Admision() {
  const { token } = useGlobal();
  const [buttonPopUpExamen, setButtonPopUpExamen] = useState(false);
  const [solicitud, setSolicitud] = useState([]);
  const [cartaName, setCartaName] = useState("");
  useEffect(() => {
    (async () => setSolicitud(await post("/get/soli", { token })))();
  }, [token]);
  console.log(solicitud);
  return (
    <>
      <h1 className="display-1 mb-5 text-center">
        <a className="fancy-link">Interesados</a>
      </h1>

      <div className="flex flex-wrap gap-8 justify-start ml-40 mr-12 pb-10">
        <button
          className="fixed right-12 mb-12"
          onClick={() => {
            setButtonPopUpExamen(true);
          }}
        >
          Generar Exámen
        </button>
        <details>
          <summary>PENDIENTES</summary>
          {solicitud.map((u) => 
            <Interesado 
            key={u.id_usuario}
            nombreSoli={solicitud.solicitud}  
            id_usuario={u.id_usuario} 
            setCartaName={setCartaName}
            setButtonPopUpExamen={setButtonPopUpExamen}
            />
          )}
        </details>
      </div>
      <Modal trigger={buttonPopUpExamen} setTrigger={setButtonPopUpExamen}>
        <Examen cartaName={cartaName}/>
      </Modal>
    </>
  );
}

export default Admision;
