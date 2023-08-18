import { Popup } from "react-leaflet";
import { useMarkers } from "../../../context/Markers/useMarkers";
import { post } from "../../../api/api";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function PopUp({ id_universidad }) {
  const { setIdUniToShowInfo } = useMarkers();
  const [universidad, setUniversidad] = useState({});
  useEffect(() => {
    (async () => {
      setUniversidad(await post("/get/uni", { id_universidad }));
    })();
  }, [id_universidad]);
  /* function handleFavorito() {} */
  return (
    <Popup>
      <button
        value={id_universidad}
        type="button"
        onClick={({ target }) => setIdUniToShowInfo(target.value)}
      >
        guardar
      </button>
      <strong>{universidad.nombre_universidad}</strong>
      <br />
      <a href={universidad.maps_universidad} target="_blank" rel="noreferrer">
        {universidad.direccion_universidad}, {universidad.localidad_universidad}
        , {universidad.zona_universidad}
      </a>
      <br />
      <button
        value={id_universidad}
        type="button"
        onClick={({ target }) => setIdUniToShowInfo(target.value)}
      >
        Ver Más...
      </button>
    </Popup>
  );
}
PopUp.propTypes = {
  id_universidad: PropTypes.number,
};
export default PopUp;
