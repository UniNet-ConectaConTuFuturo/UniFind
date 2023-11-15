/* css */
import "./ListaInteres.css";
/* Components */
import Item from "./Item/Item";
import { Empty, List, theme } from "antd";
import { useLoaderData } from "react-router-dom";
import Guia from "./Guia/Guia";
import ListaProvider from "./ListaProvider";
/* Scrollbar */
import "simplebar";
import "simplebar/dist/simplebar.css";
import Modales from "./Modales/Modales";

function ListaInteres() {
  const favoritas = useLoaderData();
  const { ["token"]: antd } = theme.useToken();
  return (
    <ListaProvider>
      <main className="bg-teal-700 h-screen py-8">
        <div data-simplebar className="ml-40 mr-4 pr-8 h-full ">
          <Guia />
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
                <Item
                  key={u.id_universidad}
                  id_universidad={u.id_universidad}
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
        <Modales />
      </main>
    </ListaProvider>
  );
}

export default ListaInteres;
