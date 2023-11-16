import { Suspense, lazy, useState } from "react";
//Components
import { Collapse, theme, List } from "antd";
import Interesado from "./Interesado";
const Examen = lazy(() => import("./Examen"));
const Modal = lazy(() => import("../UI/Modal"));
const CustomEmpty = lazy(() => import("../UI/CustomEmpty"));
//CSS
import "../ListaInteres/ListaInteres.css";
import { useLoaderData } from "react-router-dom";
//Scrollbar
import "simplebar";
import "simplebar/dist/simplebar.css";
//Guia de Uso
import GuiaUsoRector from "./GuiaUsoRector";
import AdmisionProvider from "./AdmisionProvider";

function Admision() {
  const { aceptada, pendiente, rechazada, segunda_instancia, nombre_universidad } = useLoaderData();
  const [buttonPopUpExamen, setButtonPopUpExamen] = useState(false);
  const [idToShow, setIdToShow] = useState("");
  console.log("estado", pendiente);
  const getItems = (panelStyle) => [
    {
      key: 1,
      label: "PENDIENTES",
      style: panelStyle,
      children: pendiente.length ? (
        <List
          dataSource={pendiente}
          renderItem={(u) => {
            console.log(u);
            return (
            <Interesado
              key={u.id_usuario}
              id_usuario={u.id_usuario}
              setIdToShow={setIdToShow}
              setButtonPopUpExamen={setButtonPopUpExamen}
            />
          )}}
        />
      ) : (
        <CustomEmpty />
      ),
    },
    {
      key: 2,
      label: "ACEPTADOS",
      style: panelStyle,
      children: aceptada.length ? (
        <List
          dataSource={aceptada}
          renderItem={(u) => (
            <Interesado
              key={u.id_usuario}
              id_usuario={u.id_usuario}
              setIdToShow={setIdToShow}
              setButtonPopUpExamen={setButtonPopUpExamen}
            />
          )}
        />
      ) : (
        <CustomEmpty />
      ),
    },
    {
      key: 3,
      label: "RECHAZADOS",
      style: panelStyle,
      children: rechazada.length ? (
        <List
          dataSource={rechazada}
          renderItem={(u) => (
            <Interesado
              key={u.id_usuario}
              id_usuario={u.id_usuario}
              setIdToShow={setIdToShow}
              setButtonPopUpExamen={setButtonPopUpExamen}
            />
          )}
        />
      ) : (
        <CustomEmpty />
      ),
    },
    {
      key: 4,
      label: "SEGUNDA INSTANCIA",
      style: panelStyle,
      extra: genExam(),
      children: segunda_instancia.length ? (
        <List
          dataSource={segunda_instancia}
          renderItem={(u) => {
            console.log(u);
            return (
            <Interesado
              key={u.id_usuario}
              id_usuario={u.id_usuario}
              setIdToShow={setIdToShow}
              setButtonPopUpExamen={setButtonPopUpExamen}
            />
          )}}
        />
      ) : (
        <CustomEmpty />
      ),
    },
  ];
  const { ["token"]: antd } = theme.useToken();

  const genExam = () => (
    <a className="group transition duration-300 text-black">
      Generar Exámen
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
    </a>
  );

  const panelStyle = {
    marginBottom: 24,
    background: "#0002",
    borderRadius: antd.borderRadiusLG,
    border: "none",
  };
  return (
    <AdmisionProvider>
      <main className="bg-[url(/images/examen.png)] bg-cover h-screen">
        <div className="backdrop-brightness-[0.10] h-full py-8">
        <div data-simplebar className="ml-40 mr-4 pr-8 h-full invert">
          <GuiaUsoRector />
          <h1
            className="bg-[#0002] rounded-md text-6xl mb-4 px-2 pb-2 inline-block font-sans"
          >
            Sistema de Admisión
            <h3>{nombre_universidad}</h3>
          </h1>
          <Suspense>
            <Collapse
              className="bg-transparent"
              bordered={false}
              items={getItems(panelStyle)}
            />
          </Suspense>
        </div>
        <Suspense>
          <Modal trigger={buttonPopUpExamen} setTrigger={setButtonPopUpExamen}>
            <Examen id_usuario={idToShow}/>
          </Modal>
        </Suspense>
        </div>
      </main>
    </AdmisionProvider>
  );
}

export default Admision;
