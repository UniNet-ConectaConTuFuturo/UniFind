import { useEffect } from "react";
import { useState } from "react";
import { get } from "../../api/api";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { List, theme } from "antd";
import DatosUni from "../Mapa/OutMapComponents/AsideInfo/DatosUni";
import { useOutletContext } from "react-router-dom";

function Card({
  setButtonPopUpVerMas,
  setButtonPopUpCarta,
  setIdUniToShowInfo,
  id_universidad,
}) {
  const [universidad, setUniversidad] = useState(null);
  const [estadoCarta, setEstadoCarta] = useState(null);
  const { token } = useOutletContext();
  const { ["token"]: antd } = theme.useToken();

  useEffect(() => {
    (async () => {
      setUniversidad(await get("/get/uni", { id_universidad }));
    })();
  }, [id_universidad]);
  useEffect(()=>{
    (async()=>{
      setEstadoCarta(await get("/verestado", { id_universidad, token }));
    })();
  }, [id_universidad]);
  console.log(estadoCarta);
  return (
    <>
      {universidad && (
        <List.Item
          className="px-4 my-4"
          style={{ background: "#fff2", borderRadius: antd.borderRadiusLG }}
          extra={
            <section className="grid gap-8">
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
              {estadoCarta != null ? (
                <p className="">Estado: {estadoCarta}</p>
              ) : (
                <button
                  className="w-24 border rounded-md p-2 text-center"
                  onClick={() => {
                    setIdUniToShowInfo(id_universidad);
                    setButtonPopUpCarta(true);
                  }}
                >
                  Enviar Carta
                </button>
              )}
              <button
                className="w-24 border rounded-md p-2 text-center"
                onClick={() => {
                  setIdUniToShowInfo(id_universidad);
                }}
              >
                Consultar
              </button>
            </section>
          }
        >
          <List.Item.Meta
            title={universidad.nombre_universidad}
            description={<DatosUni universidad={universidad} />}
          />
        </List.Item>
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
