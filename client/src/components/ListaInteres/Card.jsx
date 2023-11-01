import { useEffect, useRef } from "react";
import { useState } from "react";
import { get } from "../../api/api";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tooltip, theme } from "antd";
import DatosUni from "../Mapa/OutMapComponents/AsideInfo/DatosUni";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { twMerge } from "tailwind-merge";
import { useLista } from "../../hooks/useLista";

function Card({
  setButtonPopUpVerMas,
  setButtonPopUpCarta,
  setIdUniToShowInfo,
  id_universidad,
}) {
  const [universidad, setUniversidad] = useState(null);
  const [estadoCarta, setEstadoCarta] = useState(null);
  const [estadoTicket, setEstadoTicket] = useState(null);
  const [mailRector, setMailRector] = useState(null);
  const { token } = useOutletContext();
  const { ["token"]: antd } = theme.useToken();
  const {refButton1} = useLista()
  useEffect(() => {
    (async () => {
      setUniversidad(await get("/get/uni", { id_universidad }));
      setMailRector(await get("/getmail", { id_universidad }));
      setEstadoCarta(await get("/verestado", { id_universidad, token }));
      setEstadoTicket(await get("/estadoticket", { id_universidad, token }));
    })();
  }, [id_universidad, token]);
  const sendTicket = async () => {
    const formData = new FormData();
    formData.append("idUniversidad", id_universidad);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/enviarticket",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };
  console.log("carta: ", estadoCarta);
  console.log("Estado ticket: ", estadoTicket);
  console.log("mail", mailRector);
  return (
    <>
      {universidad && (
        <div
          className="px-4 py-3 mb-3 overflow-x-auto"
          style={{ background: "#fff2", borderRadius: antd.borderRadiusLG }}
        >
          <section className="flex justify-between gap-2 mb-3">
            <h3 className="text-xl min-w-[12rem]">
              {universidad.nombre_universidad}
            </h3>

            <div className="text-xs flex justify-end gap-4 opacity-60">
              {estadoCarta && (
                <p className="flex flex-wrap h-fit gap-x-1 justify-center">
                  <span className="block h-fit">carta:</span>
                  <span className="block h-fit text-amber-500">
                    {estadoCarta}
                  </span>
                </p>
              )}
              {estadoCarta && (
                <p className="flex flex-wrap h-fit gap-x-1 justify-center">
                  <span className="block h-fit text-nowrap">
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
            <section className="grid gap-2">
              {!estadoCarta && (
                <button ref={refButton1}
                  className="w-24 border rounded-md p-2 text-center"
                  onClick={() => {
                    setIdUniToShowInfo(id_universidad);
                    setButtonPopUpCarta(true);
                  }}
                >
                  Enviar Carta
                </button>
              )}
              {estadoTicket ? (
                <Tooltip
                  title={estadoTicket === "aceptado" ? "" : estadoTicket}
                >
                  <Link
                    className={twMerge(
                      "w-24 border rounded-md p-2 text-center",
                      estadoTicket === "aceptado"
                        ? ""
                        : "opacity-50 cursor-default hover:text-inherit"
                    )}
                    to={
                      estadoTicket === "aceptado" ? `mailto:${mailRector}` : ""
                    }
                  >
                    Enviar Consulta
                  </Link>
                </Tooltip>
              ) : (
                <button
                  className="w-24 border rounded-md p-2 text-center"
                  onClick={sendTicket}
                >
                  Consultar
                </button>
              )}
              <button
                className="w-24 border rounded-md p-2 text-center"
                onClick={() => {
                  setIdUniToShowInfo(id_universidad);
                  setButtonPopUpVerMas(true);
                }}
              >
                Ver Carreras
              </button>
              <Link
                to={`/mapa/@${universidad.Point.x},${universidad.Point.y},13z?selected=${id_universidad}`}
                className="w-24 border rounded-md p-2 text-center"
              >
                Ver En Mapa
              </Link>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
Card.propTypes = {
  setButtonPopUpVerMas: PropTypes.func,
  setButtonPopUpCarta: PropTypes.func,
  setIdUniToShowInfo: PropTypes.func,
  id_universidad: PropTypes.number,
};

export default Card;
