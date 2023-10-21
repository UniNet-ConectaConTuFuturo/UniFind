import { Suspense, lazy, useState } from "react";
//Components
import { Collapse, theme, Empty, List } from "antd";
import Interesado from "./Interesado";
const Examen = lazy(() => import("./Examen"));
const Modal = lazy(() => import("../UI/Modal"));
//CSS
import "../ListaInteres/ListaInteres.css";
import { useLoaderData } from "react-router-dom";

function Admision() {
  const { aceptada, pendiente, rechazada, segunda_instancia } = useLoaderData();
  const [buttonPopUpExamen, setButtonPopUpExamen] = useState(false);
  const [cartaName, setCartaName] = useState("");
  const empty = (
    <Empty
      imageStyle={{ opacity: 0.5, filter: "invert(1)" }}
      style={{ fontWeight: 700 }}
      description="Lista vacia"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
  );
  console.log("admision", aceptada, pendiente, rechazada, segunda_instancia);
  const getItems = (panelStyle) => [
    {
      key: 1,
      label: "PENDIENTES",
      style: panelStyle,
      children: pendiente.length ? (
        <List
          dataSource={pendiente}
          renderItem={(u) => (
            <Interesado
              key={u.id_usuario}
              nombreSoli={u.solicitud}
              id_usuario={u.id_usuario}
              setCartaName={setCartaName}
              setButtonPopUpExamen={setButtonPopUpExamen}
            />
          )}
        />
      ) : (
        empty
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
              nombreSoli={u.solicitud}
              id_usuario={u.id_usuario}
              setCartaName={setCartaName}
              setButtonPopUpExamen={setButtonPopUpExamen}
            />
          )}
        />
      ) : (
        empty
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
              nombreSoli={u.solicitud}
              id_usuario={u.id_usuario}
              setCartaName={setCartaName}
              setButtonPopUpExamen={setButtonPopUpExamen}
            />
          )}
        />
      ) : (
        empty
      ),
    },
    {
      key: 4,
      label: "SEGUNDA INSTANCIA",
      style: panelStyle,
      children: segunda_instancia.length ? (
        <List
          dataSource={segunda_instancia}
          renderItem={(u) => (
            <Interesado
              key={u.id_usuario}
              nombreSoli={u.solicitud}
              id_usuario={u.id_usuario}
              setCartaName={setCartaName}
              setButtonPopUpExamen={setButtonPopUpExamen}
            />
          )}
        />
      ) : (
        empty
      ),
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

export default Admision;
