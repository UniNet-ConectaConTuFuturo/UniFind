import { useLoaderData } from "react-router-dom";
//Components
import { Suspense } from "react";
import { Collapse } from "antd";
import CustomEmpty from "../UI/CustomEmpty";
import AdmisionProvider from "./AdmisionProvider";
import GuiaUsoRector from "./Guia/GuiaUsoRector";
import Lista from "./Lista/Lista";
import Modales from "./Modales/Modales";
import GenerarCitatorio from "./Extras/GenerarCitatorio";
import ExportarExcel from "./Extras/ExportarExcel";
//CSS
import "../ListaInteres/ListaInteres.css";
//Scrollbar
import "simplebar";
import "simplebar/dist/simplebar.css";

const panelStyle = {
  marginBottom: 24,
  background: "#0002",
  borderRadius: "0.375rem",
  border: "none",
};
function Admision() {
  const {
    aceptada,
    pendiente,
    rechazada,
    segunda_instancia,
    nombre_universidad,
  } = useLoaderData();

  const items = [
    {
      key: 1,
      label: "PENDIENTES",
      style: panelStyle,
      extra: <ExportarExcel />,
      children: pendiente.length ? (
        <Lista lista={pendiente} />
      ) : (
        <CustomEmpty />
      ),
    },
    {
      key: 2,
      label: "ACEPTADOS",
      style: panelStyle,
      extra: <ExportarExcel />,
      children: aceptada.length ? <Lista lista={aceptada} /> : <CustomEmpty />,
    },
    {
      key: 3,
      label: "RECHAZADOS",
      style: panelStyle,
      extra: <ExportarExcel />,
      children: rechazada.length ? (
        <Lista lista={rechazada} />
      ) : (
        <CustomEmpty />
      ),
    },
    {
      key: 4,
      label: "SEGUNDA INSTANCIA",
      style: panelStyle,
      extra: (
        <section className="flex gap-4">
          <GenerarCitatorio />
          <ExportarExcel />
        </section>
      ),
      children: segunda_instancia.length ? (
        <Lista lista={segunda_instancia} />
      ) : (
        <CustomEmpty />
      ),
    },
  ];

  return (
    <AdmisionProvider>
      <main className="bg-[url(/images/examen.png)] bg-cover h-screen">
        <div className="backdrop-brightness-[0.10] h-full py-6">
          <div data-simplebar className="ml-40 mr-4 pr-8 h-full invert">
            <GuiaUsoRector />
            <h1 className="bg-[#0002] rounded-sm text-6xl mb-4 px-2 pb-2 inline-block font-sans">
              <p>Sistema de Admisión</p>
              <p>{nombre_universidad}</p>
            </h1>
            <Suspense>
              <Collapse
                className="bg-transparent"
                bordered={false}
                items={items}
              />
            </Suspense>
          </div>
          <Suspense>
            <Modales />
          </Suspense>
        </div>
      </main>
    </AdmisionProvider>
  );
}

export default Admision;
