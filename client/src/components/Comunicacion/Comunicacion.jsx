import "./Comunicacion.css";
import { Suspense, lazy, useState } from "react";
//Components
import { Collapse, theme, List } from "antd";
import SendTicket from "./SendTicket";
const CustomEmpty = lazy(()=>import("../UI/CustomEmpty"))

  
function Comunicacion() {
  /* const { aceptada, pendiente } = useLoaderData(); */
  const pendiente = [1], aceptada = [];
  const getItems = (panelStyle) => [
    {
      key: 1,
      label: "PENDIENTES",
      style: panelStyle,
      children: pendiente.length ? <SendTicket /> : <CustomEmpty/>,
    },
    {
      key: 2,
      label: "ACEPTADOS",
      style: panelStyle,
      children: aceptada.length ? <SendTicket /> : <CustomEmpty/>,
    },
  ];
  const { ["token"]: antd } = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    background: "#fff2",
    borderRadius: antd.borderRadiusLG,
    border: "none",
  };
  return (
    <main className="bg-teal-700 h-screen py-8">
      <div className="ml-40 mr-4 pr-8 h-full overflow-y-scroll">
        <h1
          style={{ background: "#fff2", borderRadius: antd.borderRadiusLG }}
          className="text-6xl mb-4 px-2 pb-2 inline-block font-sans"
        >
          Centro de Comunicación
        </h1>
        <Suspense>
          <Collapse
            className="bg-transparent"
            bordered={false}
            items={getItems(panelStyle)}
          />
        </Suspense>
      </div>
      {/* <Suspense>
        <Modal trigger={buttonPopUpExamen} setTrigger={setButtonPopUpExamen}>
          <Examen cartaName={cartaName} />
        </Modal>
      </Suspense> */}
    </main>
  );
}

export default Comunicacion