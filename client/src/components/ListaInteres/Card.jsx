import { useEffect } from "react";
import { useState } from "react";
import { get } from "../../api/api";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Descriptions, List } from "antd";
import DatosUni from "../Mapa/OutMapComponents/AsideInfo/DatosUni";

function Card({
  setButtonPopUpVerMas,
  setButtonPopUpCarta,
  setIdUniToShowInfo,
  id_universidad,
}) {
  const [universidad, setUniversidad] = useState(null);

  useEffect(() => {
    (async () => {
      setUniversidad(await get("/get/uni", { id_universidad }));
    })();
  }, [id_universidad]);

  return (
    <>
      {universidad && (
        <>
          <List.Item
            extra={
              <section className="">
                <button
                className="w-24 border rounded-md"
                  onClick={() => {
                    setIdUniToShowInfo(id_universidad);
                    setButtonPopUpVerMas(true);
                  }}
                >
                  Ver información completa de la universidad
                </button>
                <Link
                  to={`/mapa/@${universidad.Point.x},${universidad.Point.y},13z?selected=${id_universidad}`}
                  className="w-24 border rounded-md"
                >
                  Ver en el mapa
                </Link>
                <button
                className="w-24 border rounded-md"
                  onClick={() => {
                    setIdUniToShowInfo(id_universidad);
                    setButtonPopUpCarta(true);
                  }}
                >
                  Enviar Carta
                </button>
                <div>
                  <p className="">Estado: ACEPTADO</p>
                </div>
              </section>
            }
          >
            <List.Item.Meta
              title={universidad.nombre_universidad}
              description={<DatosUni universidad={universidad} />}
            />
          </List.Item>
          <Descriptions
            title={universidad.nombre_universidad}
            items={[
              {
                label: "Dirección",
                children: (
                  <a
                    href={universidad.maps_universidad}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {universidad.direccion_universidad},{" "}
                    {universidad.localidad_universidad},{" "}
                    {universidad.zona_universidad}
                  </a>
                ),
              },
            ]}
          />
        </>
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
