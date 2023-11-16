/* css */
import "./ListaInteres.css";
/* Components */
import Guia from "./Guia/Guia";
import ListaProvider from "./ListaProvider";
import Lista from "./Lista";
/* Scrollbar */
import "simplebar";
import "simplebar/dist/simplebar.css";
import Modales from "./Modales/Modales";
import { useState } from "react";
import Item from "./Item/Item";

function ListaInteres() {
  const [open, setOpen] = useState(false);
  return (
    <ListaProvider>
      <main className="bg-teal-700 h-screen py-8">
        <div data-simplebar className="ml-40 mr-4 pr-8 h-full ">
          <Guia open={open} setOpen={setOpen} />
          <h1 className="bg-[#fff2] rounded-md text-6xl mb-4 px-2 pb-2 inline-block font-sans">
            Lista de Interés
          </h1>
          {open ? (
            <div role="Lista de Prueba">
              <Item />
            </div>
          ) : (
            <div role="Lista de Interés">
              <Lista />
            </div>
          )}
        </div>
        <Modales />
      </main>
    </ListaProvider>
  );
}

export default ListaInteres;
