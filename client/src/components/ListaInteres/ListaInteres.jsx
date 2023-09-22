import { post } from "../../api/api";
import { useEffect, useReducer } from "react";
import { useState } from "react";
import { useGlobal } from "../../hooks/useGlobal";
/* css */
import "./ListaInteres.css";
/* Components */
import Card from "./Card";
import FileUpload from "./FileUpload";
import Modal from "../UI/Modal";
import Informacion from "../UI/Informacion";
function ListaInteres() {
  const { token } = useGlobal();
  const [cambio, dispatch] = useReducer((state, action) => action, 0);
  const [favoritas, setFavoritas] = useState([]);
  const [buttonPopUpCarta, setButtonPopUpCarta] = useState(false);
  const [buttonPopUpVerMas, setButtonPopUpVerMas] = useState(false);
  const [idUniToShowInfo, setIdUniToShowInfo] = useState(0);
  useEffect(() => {
    (async () => setFavoritas(await post("/getfavorites", { token })))();
  }, [token, cambio]);
  return (
    <>
      <h1 className="display-1 mb-5 text-center">
        <a className="fancy-link">Lista de Interés</a>
      </h1>
      <div className="flex flex-wrap gap-8 justify-start ml-40 mr-12 pb-10">
        {favoritas.map((u) => (
          <Card
            key={u.id_universidad}
            setButtonPopUpVerMas={setButtonPopUpVerMas}
            setButtonPopUpCarta={setButtonPopUpCarta}
            id_universidad={u.id_universidad}
            setIdUniToShowInfo={setIdUniToShowInfo}
          />
        ))}
      </div>
      <Modal trigger={buttonPopUpVerMas} setTrigger={setButtonPopUpVerMas}>
        <Informacion idUniToShowInfo={idUniToShowInfo} dispatch={dispatch} />
      </Modal>

      <Modal trigger={buttonPopUpCarta} setTrigger={setButtonPopUpCarta}>
        <FileUpload id_universidad={idUniToShowInfo} />
      </Modal>
    </>
  );
}

export default ListaInteres;
