import { Suspense, lazy, useState } from "react";
import { useGlobal } from "../../hooks/useGlobal";
import { useEffect } from "react";
import { get } from "../../api/api";
//Components
import { Collapse, theme, Empty, List } from "antd";
import Interesado from "./Interesado";
const Examen = lazy(() => import("./Examen"));
const Modal = lazy(() => import("../UI/Modal"));
//CSS
import "../ListaInteres/ListaInteres.css";

function Admision() {
  const { token } = useGlobal();
  const [buttonPopUpExamen, setButtonPopUpExamen] = useState(false);
  const [solicitud, setSolicitud] = useState({});
  const [cartaName, setCartaName] = useState("");
  useEffect(() => {
    (async () => setSolicitud(await get("/get/soli", { token })))();
  }, [token]);
  const empty = (
    <Empty
      imageStyle={{ opacity: 0.5, filter: "invert(1)" }}
      style={{ fontWeight: 700 }}
      description="Lista vacia"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
  );
  console.log(solicitud)
  const getItems = (panelStyle) => [
    {
      key: 1,
      label: "PENDIENTES",
      style: panelStyle,
      children: solicitud.pendiente && solicitud.pendiente.length ? (
        <List
          dataSource={solicitud.pendiente}
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
      children: solicitud.aceptada && solicitud.aceptada.length ? (
        <List
          dataSource={solicitud.aceptada}
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
      children: solicitud.rechazada && solicitud.rechazada.length ? (
        <List
          dataSource={solicitud.rechazada}
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
      children: solicitud.segunda_instacia && solicitud.segunda_instacia.length ? (
        <List
          dataSource={solicitud.segunda_instacia}
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
          className="text-6xl mb-4 px-2 pb-2 inline-block"
        >
          <a className="font-sans">Interesados</a>
        </h1>
        <Suspense>
          <Collapse
            className="bg-transparent"
            /* accordion={true} */
            bordered={false}
            items={getItems(panelStyle)}
          />
        </Suspense>
        <Suspense>
          <Modal trigger={buttonPopUpExamen} setTrigger={setButtonPopUpExamen}>
            <Examen cartaName={cartaName}/>
          </Modal>
        </Suspense>
      </div>
    </main>
  );
}

export default Admision;
