import { useEffect } from "react";
import { useState } from "react";
import { get, post } from "../../../api/api";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tooltip, theme } from "antd";
import DatosUni from "../../Mapa/OutMapComponents/AsideInfo/DatosUni";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { twMerge } from "tailwind-merge";
import { useLista } from "../../../hooks/useContexts";
import Botones from "./Botones";

function Item({
  setPopUpVerMas,
  setPopUpCarta,
  setIdUniToShowInfo,
  id_universidad,
}) {
  //Datos
  const { token } = useOutletContext();
  const [universidad, setUniversidad] = useState(null);
  const [estadoCarta, setEstadoCarta] = useState(null);
  const [estadoTicket, setEstadoTicket] = useState(null);
  useEffect(() => {
    (async () => {
      setUniversidad(await get("/get/uni", { id_universidad }));
      setMailRector(await get("/getmail", { id_universidad }));
      setEstadoCarta(await get("/verestado", { id_universidad, token }));
      setEstadoTicket(await get("/estadoticket", { id_universidad, token }));
    })();
  }, [id_universidad, token]);

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
              setPopUpCarta={setPopUpCarta}
              setPopUpVerMas={setPopUpVerMas}
              setIdUniToShowInfo={setIdUniToShowInfo}
              id_universidad={id_universidad}
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
