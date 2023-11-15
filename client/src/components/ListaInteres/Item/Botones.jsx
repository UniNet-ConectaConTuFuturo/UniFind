import { Link } from "react-router-dom";
import { useLista } from "../../../hooks/useContexts";
import { get, post } from "../../../api/api";
import { Tooltip } from "antd";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Botones({ id_universidad, Point, estadoTicket, estadoCarta }) {
  const {
    refButtonEnviarCarta,
    refButtonConsultar,
    refButtonVerCarreras,
    refButtonVerEnMapa,
    setPopUpCarta,
    setPopUpVerMas,
    setIdUniToShowInfo,
  } = useLista();
  const [mailRector, setMailRector] = useState(null);
  useEffect(() => {
    (async () => {
      setMailRector(get("/getmail", false, { id_universidad }));
    })();
  }, [id_universidad]);
  return (
    <section className="grid gap-2">
      {!estadoCarta && (
        <button
          ref={refButtonEnviarCarta}
          className="w-24 border rounded-md p-2 text-center"
          onClick={() => {
            setIdUniToShowInfo(id_universidad);
            setPopUpCarta(true);
          }}
        >
          Enviar Carta
        </button>
      )}
      {estadoTicket ? (
        <Tooltip title={estadoTicket === "aceptado" ? "" : estadoTicket}>
          <Link
            className={twMerge(
              "w-24 border rounded-md p-2 text-center",
              estadoTicket === "aceptado"
                ? ""
                : "opacity-50 cursor-default hover:text-inherit"
            )}
            to={estadoTicket === "aceptado" ? `mailto:${mailRector}` : ""}
          >
            Consultar
          </Link>
        </Tooltip>
      ) : (
        <button
          ref={refButtonConsultar}
          className="w-24 border rounded-md p-2 text-center"
          onClick={() => post("/enviarticket", true, { id_universidad })}
        >
          Solicitar Consulta
        </button>
      )}
      <button
        ref={refButtonVerCarreras}
        className="w-24 border rounded-md p-2 text-center"
        onClick={() => {
          setIdUniToShowInfo(id_universidad);
          setPopUpVerMas(true);
        }}
      >
        Ver Carreras
      </button>
      <Link
        ref={refButtonVerEnMapa}
        to={`/mapa/@${Point.x},${Point.y},13z?selected=${id_universidad}`}
        className="w-24 border rounded-md p-2 text-center"
      >
        Ver En Mapa
      </Link>
    </section>
  );
}
Botones.propTypes = {
  id_universidad: PropTypes.number,
  Point: PropTypes.exact({ x: PropTypes.number, y: PropTypes.number }),
  estadoTicket: PropTypes.any,
  estadoCarta: PropTypes.any,
};
export default Botones;
