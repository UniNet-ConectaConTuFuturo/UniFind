import { useEffect } from "react";
import { useState } from "react";
import { get } from "../../../api/api";
import PropTypes from "prop-types";
import DatosUni from "../../Mapa/OutMapComponents/AsideInfo/DatosUni";
import Botones from "./Botones";
import Estados from "./Estados";

function Item({ id_universidad }) {
  //Datos
  const [universidad, setUniversidad] = useState({
    nombre_universidad: "Nombre Universidad",
    maps_universidad: "https://maps.app.goo.gl/7tQWBnNUtftZq5tV8",
    direccion_universidad: "Dirección",
    localidad_universidad: "Localidad",
    zona_universidad: "Zona",
    web_universidad: "uninet.com",
    gestion_universidad: "Pública o Privada",
    correo_universidad: "uninet@gmail.com",
    Point: PropTypes.exact({
      x: 0,
      y: 0,
    }),
  });
  const [estadoCarta, setEstadoCarta] = useState(null);
  const [estadoTicket, setEstadoTicket] = useState(null);
  useEffect(() => {
    if (id_universidad)
      (async () => {
        setUniversidad(await get("/get/uni", { id_universidad }));
        setEstadoCarta(await get("/verestado", { id_universidad }));
        setEstadoTicket(await get("/estadoticket", { id_universidad }));
      })();
  }, [id_universidad]);

  // Diseño
  return (
    <>
      {universidad && (
        <div className="bg-[#fff2] rounded-md px-4 py-3 mb-3 overflow-x-auto">
          <section className="flex justify-between gap-2 mb-3">
            <h3 className="text-xl min-w-[12rem]">
              {universidad.nombre_universidad}
            </h3>

            <Estados estadoCarta={estadoCarta} estadoTicket={estadoTicket}/>
          </section>
          <div className="gap-4 flex justify-between">
            <DatosUni universidad={universidad} />
            <Botones
              id_universidad={id_universidad}
              Point={universidad.Point}
              estadoTicket={estadoTicket}
              estadoCarta={estadoCarta}
            />
          </div>
        </div>
      )}
    </>
  );
}
Item.propTypes = {
  id_universidad: PropTypes.number,
};

export default Item;
