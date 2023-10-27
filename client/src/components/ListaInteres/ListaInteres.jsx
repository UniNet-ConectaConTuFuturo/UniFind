import { useState } from "react";
/* css */
import "./ListaInteres.css";
/* Components */
import Card from "./Card";
import FileUpload from "./FileUpload";
import Modal from "../UI/Modal";
import { Empty, List, theme } from "antd";
import { useLoaderData } from "react-router-dom";
import CarrerasUni from "../Mapa/OutMapComponents/AsideInfo/CarrerasUni";
/* Scrollbar */
import 'simplebar';
import 'simplebar/dist/simplebar.css';

function ListaInteres() {
  const favoritas = useLoaderData();
  const [buttonPopUpCarta, setButtonPopUpCarta] = useState(false);
  const [buttonPopUpVerMas, setButtonPopUpVerMas] = useState(false);
  const [idUniToShowInfo, setIdUniToShowInfo] = useState(0);
  const { ["token"]: antd } = theme.useToken();
  console.log(favoritas);
  return (
    <main className="bg-teal-700 h-screen py-8">
      <div data-simplebar className="ml-40 mr-4 pr-8 h-full ">
        <h1
          style={{ background: "#fff2", borderRadius: antd.borderRadiusLG }}
          className="text-6xl mb-4 px-2 pb-2 inline-block font-sans"
        >
          Lista de Interés
        </h1>
        {favoritas.length ? (
          <List
            pagination={{ align: "center", pageSize: 3 }}
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
          <div
            style={{ background: "#fff2", borderRadius: antd.borderRadiusLG }}
            className="p-4"
          >
            <Empty
              imageStyle={{ opacity: 0.5, filter: "invert(1)" }}
              style={{ fontWeight: 700 }}
              description="Lista vacia"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          </div>
        )}
      </div>

      <Modal
        trigger={buttonPopUpVerMas}
        setTrigger={setButtonPopUpVerMas}
      >
        <CarrerasUni id_universidad={idUniToShowInfo} />
      </Modal>

      <Modal trigger={buttonPopUpCarta} setTrigger={setButtonPopUpCarta}>
        <FileUpload id_universidad={idUniToShowInfo} />
      </Modal>

    </main>
  );
}

export default ListaInteres;
