import "./Comunicacion.css";
import { Suspense, lazy, useState } from "react";
//Components
import { Collapse, theme, Empty, List } from "antd";
import Comunicacion from "./sendTicket";

  
  function ListaComunicacion() {
  const panelStyle = 'tuEstilo';
  const empty = (
    <Empty
      imageStyle={{ opacity: 0.5, filter: "invert(1)" }}
      style={{ fontWeight: 700 }}
      description="Lista vacia"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
    );
    const getItems = (panelStyle) => [
      {
        key: 1,
        label: "PENDIENTES",
        style: panelStyle,
        children: pendiente.length ? (
          <Comunicacion/>
          ) : (
            empty
          ),
      },
      {
        key: 1,
        label: "ACEPTADOS",
        style: panelStyle,
        children: pendiente.length ? (
          <Comunicacion/>
          ) : (
            empty
          ),
      },
      ]; 
  
    return (
      <main className="bg-teal-700 h-screen py-8">
        <div className="ml-40 mr-4 pr-8 h-full overflow-y-scroll">
          <h1
            style={{ background: "#fff2", borderRadius: antd.borderRadiusLG }}
            className="text-6xl mb-4 px-2 pb-2 inline-block font-sans"
          >
            Interesados
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
            <Examen cartaName={cartaName} />
          </Modal>
        </Suspense>
      </main>
    );
  }

export default Comunicacion