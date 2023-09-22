import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useGlobal } from "../../../../hooks/useGlobal";
import { post } from "../../../../api/api";
import { useMap } from "react-leaflet";
import { useMapa } from "../../../../hooks/useMapa";

import { Link } from "react-router-dom";
import { FaIndent, FaRegStar, FaStar } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

function BotonFavorito({ id_universidad }) {
  const map = useMap();
  const { token } = useGlobal();
  const { dispatchBusqueda } = useMapa();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (typeof token === "string") {
      (async () =>
        setIsFavorite(
          (await post("/isfavorite", { id_universidad, token })).value
        ))();
    }
  }, [token, id_universidad]);

  async function handleClickStar(fetch, isfavorite) {
    await post(fetch, { id_universidad, token });
    setIsFavorite(isfavorite);
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
      {typeof token === "string" && (
        <>
          <Link to="/listainteres" title="Ir a lista de favoritos">
            <FaIndent />
          </Link>
          {isFavorite ? (
            <button
              type="button"
              title="Sacar de favoritos"
              onClick={() => handleClickStar("/deletefavorite", false)}
            >
              <FaStar color="#0028ff" />
            </button>
          ) : (
            <button
              type="button"
              title="Agregar a favoritos"
              onClick={() => handleClickStar("/setfavorite", true)}
              disabled={typeof token !== "string"}
            >
              <FaRegStar color="#0028ff" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
BotonFavorito.propTypes = {
  id_universidad: PropTypes.number,
};
export default BotonFavorito;
