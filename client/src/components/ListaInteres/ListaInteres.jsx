import { get } from "../../api/api";
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
import { Empty, List, theme } from "antd";
function ListaInteres() {
  const { token } = useGlobal();
  const [cambio, dispatch] = useReducer((state, action) => action, 0);
  const [favoritas, setFavoritas] = useState([]);
  const [buttonPopUpCarta, setButtonPopUpCarta] = useState(false);
  const [buttonPopUpVerMas, setButtonPopUpVerMas] = useState(false);
  const [idUniToShowInfo, setIdUniToShowInfo] = useState(0);
  useEffect(() => {
    (async () => setFavoritas(await get("/getfavorites", { token })))();
  }, [token, cambio]);
  const { ["token"]: antd } = theme.useToken();
  return (
    <main className="bg-teal-700 h-screen py-8">
      <div className="ml-40 mr-4 pr-8 h-full overflow-y-scroll">
        <h1
          style={{ background: "#fff2", borderRadius: antd.borderRadiusLG }}
          className="text-6xl mb-4 px-2 pb-2 inline-block font-sans"
        >
          Lista de Interés
        </h1>
        <div
          style={{ background: "#fff2", borderRadius: antd.borderRadiusLG }}
          className="p-4"
        >
          {favoritas.length ? (
            <List
              dataSource={favoritas}
              renderItem={(u) => (
                <Card
                  key={u.id_universidad}
                  setButtonPopUpVerMas={setButtonPopUpVerMas}
                  setButtonPopUpCarta={setButtonPopUpCarta}
                  id_universidad={u.id_universidad}
                  setIdUniToShowInfo={setIdUniToShowInfo}
                />
              )}
            />
          ) : (
            <Empty
              imageStyle={{ opacity: 0.5, filter: "invert(1)" }}
              style={{ fontWeight: 700 }}
              description="Lista vacia"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          )}
        </div>
      </div>

      <Modal trigger={buttonPopUpVerMas} setTrigger={setButtonPopUpVerMas}>
        <Informacion idUniToShowInfo={idUniToShowInfo} dispatch={dispatch} />
      </Modal>

      <Modal trigger={buttonPopUpCarta} setTrigger={setButtonPopUpCarta}>
        <FileUpload id_universidad={idUniToShowInfo} />
      </Modal>
    </main>
  );
}

export default ListaInteres;
