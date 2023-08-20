import { useEffect, useState } from "react";
import { useGlobal } from "../../../hooks/useGlobal";
import { post } from "../../../api/api";
import PropTypes from "prop-types";
import { FaIndent, FaRegStar, FaStar } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { useMap } from "react-leaflet";
import { useMarkers } from "../../../hooks/useMarkers";
function BotonFavorito({ id_universidad }) {
  const map = useMap();
  const { token } = useGlobal();
  const { dispatchBusqueda } = useMarkers();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (typeof token === "string") {
      (async () =>
        setIsFavorite(
          (await post("/isfavorite", { id_universidad, token })).value
        ))();
    }
  }, [token, id_universidad]);
  async function guardar() {
    await post("/setfavorite", { id_universidad, token });
    setIsFavorite(true);
    dispatchBusqueda();
  }
  async function sacar() {
    await post("/deletefavorite", { id_universidad, token });
    setIsFavorite(false);
    dispatchBusqueda();
  }
  return (
    <div className="flex flex-col justify-between column-gap-2">
      <button
        type="button"
        title="Cerrar ventana"
        onClick={() => map.closePopup()}
      >
        <BsXLg />
      </button>
      <button type="button" disabled={true} title="Ir a lista de favoritos">
        <FaIndent />
      </button>
      {isFavorite ? (
        <>
          <button type="button" title="Sacar de favoritos" onClick={sacar}>
            <FaStar />
          </button>
        </>
      ) : (
        <button
          type="button"
          title="Agregar a favoritos"
          onClick={guardar}
          disabled={typeof token !== "string"}
        >
          <FaRegStar />
        </button>
      )}
    </div>
  );
}
BotonFavorito.propTypes = {
  id_universidad: PropTypes.number,
};
export default BotonFavorito;
