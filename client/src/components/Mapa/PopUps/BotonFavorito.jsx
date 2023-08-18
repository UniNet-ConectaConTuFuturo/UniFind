import { useEffect, useState } from "react";
import { useGlobal } from "../../../hooks/useGlobal";
import { post } from "../../../api/api";
import PropTypes from "prop-types";

function BotonFavorito({ id_universidad }) {
  const { token } = useGlobal();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (typeof token === "string") {
      (async () =>
        setIsFavorite(await post("/isfavorite", { id_universidad, token })))();
    }
  }, [token, id_universidad]);
  async function guardar() {
    await post("/setfavorite", { id_universidad, token });
    setIsFavorite(true);
  }
  async function sacar() {
    await post("/deletefavorite", { id_universidad, token });
    setIsFavorite(true);
  }
  return (
    <>
      {isFavorite ? (
        <div>
          <button type="button">Ver de lista</button>
          <button type="button" onClick={sacar}>
            Sacar de lista
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={guardar}
          disabled={typeof token !== "string"}
        >
          guardar
        </button>
      )}
    </>
  );
}
BotonFavorito.propTypes = {
  id_universidad: PropTypes.number,
};
export default BotonFavorito;
