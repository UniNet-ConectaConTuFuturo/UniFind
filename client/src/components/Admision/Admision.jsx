import { useState } from "react";
import { useGlobal } from '../../hooks/useGlobal';
import { useEffect } from "react";
import { post } from "../../api/api";
//Components
import Interesados from "./Interesados"
import Examen from "./Examen";
import Modal from "../UI/Modal";
//CSS
import "../ListaInteres/ListaInteres.css"

function Admision() {
  const { token } = useGlobal()   
  const [buttonPopUpExamen, setButtonPopUpExamen] = useState(false);
  const [solicitud, setSolicitud] = useState([]);
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
      <button className="fixed right-12 mb-12" onClick={() => {
              setButtonPopUpExamen(true);
            }}>Generar Exámen</button>
            <Interesados/>
            {solicitud.map((u)=>{
              <Interesados 
                key={u.id_usuario}
              />
            })}
      </div>
      <Modal trigger={buttonPopUpExamen} setTrigger={setButtonPopUpExamen}>
        <Examen />
      </Modal>
    </>
  )
}

export default Admision