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
    Point: {
      x: 0,
      y: 0,
    },
  });
  const [estados, setEstados] = useState(null);
  useEffect(() => {
    if (id_universidad)
      (async () => {
        setUniversidad(await get("/get/uni", { id_universidad }));
        setEstados(await get("/estados/lista-interes", { id_universidad }));
      })();
  }, [id_universidad]);
  // Diseño
  return (
    <>
      {universidad && (
        <div className="bg-[#fff2] rounded-sm px-4 py-3 mb-3 overflow-x-auto text-gray-300">
          <section className="flex justify-between gap-2 mb-3">
            <h3 className="text-xl min-w-[12rem] font-semibold">
              {universidad.nombre_universidad}
            </h3>

            {estados && (
              <Estados
                estadoCarta={estados.carta}
                estadoTicket={estados.ticket}
              />
            )}
          </section>
          <div className="gap-4 flex justify-between">
            <DatosUni universidad={universidad} iconColor="rgb(209 213 219)" />
            <Botones
              id_universidad={id_universidad}
              Point={universidad.Point}
              estadoTicket={estados ? estados.ticket : null}
              estadoCarta={estados ? estados.carta : null}
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
