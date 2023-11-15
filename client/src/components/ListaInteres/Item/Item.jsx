import { useEffect } from "react";
import { useState } from "react";
import { get } from "../../../api/api";
import PropTypes from "prop-types";
import { theme } from "antd";
import DatosUni from "../../Mapa/OutMapComponents/AsideInfo/DatosUni";
import Botones from "./Botones";

function Item({
  id_universidad,
}) {
  //Datos
  const [universidad, setUniversidad] = useState(null);
  const [estadoCarta, setEstadoCarta] = useState(null);
  const [estadoTicket, setEstadoTicket] = useState(null);
  useEffect(() => {
    (async () => {
      setUniversidad(await get("/get/uni", { id_universidad }));
      setEstadoCarta(await get("/verestado", { id_universidad }));
      setEstadoTicket(await get("/estadoticket", { id_universidad }));
    })();
  }, [id_universidad]);

  // Diseño
  const { ["token"]: antd } = theme.useToken();
  return (
    <>
      {universidad && (
        <div
          className="px-4 py-3 mb-3 overflow-x-auto"
          style={{ background: "#fff2", borderRadius: antd.borderRadiusLG }}
        >
          <section className="flex justify-between gap-2 mb-3">
            <h3 className="text-xl min-w-[12rem] text-white">
              {universidad.nombre_universidad}
            </h3>

            <div className="text-xs flex justify-end gap-4 opacity-60">
              {estadoCarta && (
                <p className="flex flex-wrap h-fit gap-x-1 justify-center">
                  <span className="block h-fit text-white">carta:</span>
                  <span className="block h-fit text-amber-500">
                    {estadoCarta}
                  </span>
                </p>
              )}
              {estadoCarta && (
                <p className="flex flex-wrap h-fit gap-x-1 justify-center">
                  <span className="block h-fit text-nowrap text-white">
                    ticket consulta:
                  </span>
                  <span className="block h-fit text-amber-500">
                    {estadoTicket}
                  </span>
                </p>
              )}
            </div>
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
  setPopUpVerMas: PropTypes.func,
  setPopUpCarta: PropTypes.func,
  setIdUniToShowInfo: PropTypes.func,
  id_universidad: PropTypes.number,
};

export default Item;
