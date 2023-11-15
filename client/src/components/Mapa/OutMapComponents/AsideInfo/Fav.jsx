import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { get, post } from "../../../../api/api";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import BtnFav from "./UI/BtnFav";

function Fav({ id_universidad, dispatch }) {
  const { token } = useOutletContext();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (token && id_universidad) {
      console.log("token: ", token);
      (async () =>
        setIsFavorite(
          (
            await get("/isfavorite", {
              id_universidad,
              token,
            })
          ).value
        ))();
    }
  }, [token, id_universidad]);
  async function handleClick(fetch, isfavorite) {
    post(fetch, { id_universidad });
    setIsFavorite(isfavorite);
    dispatch({ id_universidad });
  }
  return (
    <section className="flex justify-center my-4">
      {isFavorite ? (
        <BtnFav
          onClick={() => handleClick("/deletefavorite", false)}
          Icon={FaBookmark}
          text="Quitar de favoritos"
        />
      ) : (
        <BtnFav
          onClick={() => handleClick("/setfavorite", true)}
          Icon={FaRegBookmark}
          text="Guardar en favoritos"
        />
      )}
    </section>
  );
}
Fav.propTypes = {
  id_universidad: PropTypes.number,
  dispatch: PropTypes.func,
};
export default Fav;
