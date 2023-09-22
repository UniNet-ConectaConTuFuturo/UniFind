import { Popup, useMap } from "react-leaflet";
import { useMapa } from "../../../../hooks/useMapa";
import { post } from "../../../../api/api";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BotonFavorito from "./BotonFavorito";
import { FaMapMarkedAlt } from "react-icons/fa";

function PopUp({ id_universidad }) {
  const map = useMap();
  const { setIdUniToShowInfo } = useMapa();
  const [universidad, setUniversidad] = useState({});
  useEffect(() => {
    (async () => {
      setUniversidad(await post("/get/uni", { id_universidad }));
    })();
  }, [id_universidad]);
  function handleVerMas() {
    map.closePopup();
    setIdUniToShowInfo(id_universidad);
  }
  return (
    <Popup closeButton={false}>
      <div className="flex justify-between gap-x-4">
        <div
          role="Content"
          className="flex flex-col justify-between text-left  break-words"
        >
          <strong>{universidad.nombre_universidad}</strong>

          <a
            icon={<FaMapMarkedAlt size="20" />}
            href={universidad.maps_universidad}
            target="_blank"
            rel="noreferrer"
          >
            {universidad.direccion_universidad},{" "}
            {universidad.localidad_universidad}, {universidad.zona_universidad}
          </a>
          <button type="button" onClick={handleVerMas} className="text-left">
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
