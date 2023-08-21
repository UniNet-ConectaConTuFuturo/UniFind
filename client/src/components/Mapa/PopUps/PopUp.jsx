import { Popup } from "react-leaflet";
import { useMapa } from "../../../hooks/useMapa";
import { post } from "../../../api/api";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BotonFavorito from "./BotonFavorito";

function PopUp({ id_universidad }) {
  const { setIdUniToShowInfo } = useMapa();
  const [universidad, setUniversidad] = useState({});
  useEffect(() => {
    (async () => {
      setUniversidad(await post("/get/uni", { id_universidad }));
    })();
  }, [id_universidad]);
  return (
    <Popup closeButton={false}>
      <div className="flex justify-between gap-x-4">
        <div
          role="Content"
          className="flex flex-col justify-between text-left  break-words"
        >
          <strong>{universidad.nombre_universidad}</strong>
          <a
            href={universidad.maps_universidad}
            target="_blank"
            rel="noreferrer"
          >
            {universidad.direccion_universidad},{" "}
            {universidad.localidad_universidad}, {universidad.zona_universidad}
          </a>
          <button
            type="button"
            onClick={() => setIdUniToShowInfo(id_universidad)}
            className="text-left"
          >
            Ver Más...
          </button>
        </div>
        <BotonFavorito id_universidad={id_universidad} />
      </div>
    </Popup>
  );
}
PopUp.propTypes = {
  id_universidad: PropTypes.number,
};
export default PopUp;
