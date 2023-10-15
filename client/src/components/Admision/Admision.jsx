import { Suspense, lazy, useState } from "react";
import { useGlobal } from "../../hooks/useGlobal";
import { useEffect } from "react";
import { get } from "../../api/api";
//Components
import { Collapse, theme } from "antd";
import Interesado from "./Interesado";
const Examen = lazy(() => import("./Examen"));
const Modal = lazy(() => import("../UI/Modal"));
//CSS
import "../ListaInteres/ListaInteres.css";

function Admision() {
  const { token } = useGlobal();
  const [buttonPopUpExamen, setButtonPopUpExamen] = useState(false);
  const [solicitud, setSolicitud] = useState([]);
  const [cartaName, setCartaName] = useState("");
  useEffect(() => {
    (async () => setSolicitud(await get("/get/soli", { token })))();
  }, [token]);
  console.log(solicitud);
  const getItems = (panelStyle) => [
    {
      key: 1,
      label: "PENDIENTES",
      style: panelStyle,
      children: solicitud.map((u) => (
        <Interesado
          key={u.id_usuario}
          nombreSoli={solicitud.solicitud}
          id_usuario={u.id_usuario}
          setCartaName={setCartaName}
          setButtonPopUpExamen={setButtonPopUpExamen}
        />
      )),
    },
    {
      key: 2,
      label: "ACEPTADOS",
      style: panelStyle,
    },
    {
      key: 3,
      label: "RECHAZADOS",
      style: panelStyle,
    },
    {
      key: 4,
      label: "SEGUNDA INSTANCIA",
      style: panelStyle,
    },
  ];
  const { ["token"]: antd } = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    background: "#0001",
    borderRadius: antd.borderRadiusLG,
    border: "none",
  };
  return (
    <main className="ml-40 h-screen overflow-y-scroll">
      <h1 className="display-1 mb-5">
        <a className="fancy-link">Interesados</a>
      </h1>
      <Suspense>
        <Collapse
          className="mr-12"
          /* accordion={true} */
          bordered={false}
          items={getItems(panelStyle)}
        />
      </Suspense>
      <Suspense>
        <Modal trigger={buttonPopUpExamen} setTrigger={setButtonPopUpExamen}>
          <Examen cartaName={cartaName} />
        </Modal>
      </Suspense>
    </main>
  );
}

export default Admision;
