import Interesados from "./Interesados"
import Examen from "./Examen";
import Modal from "../UI/Modal";
import "../ListaInteres/ListaInteres.css"
import { useState } from "react";

function Admision() {
  const [buttonPopUpExamen, setButtonPopUpExamen] = useState(false);
  return (
    <>
      
      <h1 className="display-1 mb-5 text-center">
        <a className="fancy-link">Interesados</a>
      </h1>

      <div className="flex flex-wrap gap-8 justify-start ml-40 mr-12 pb-10">
      <button className="fixed right-12 mb-12" onClick={() => {
              setButtonPopUpExamen(true);
            }}>Generar Exámen</button>
        <Interesados />
        <Interesados />
      </div>
      <Modal trigger={buttonPopUpExamen} setTrigger={setButtonPopUpExamen}>
        <Examen />
      </Modal>
    </>
  )
}

export default Admision