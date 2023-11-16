import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { get, post } from "../../../../api/api";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import BtnFav from "./UI/BtnFav";

function Fav({ id_universidad, dispatch, iconColor }) {
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
    <section className="flex justify-center mb-8">
      {isFavorite ? (
        <BtnFav
          onClick={() => handleClick("/deletefavorite", false)}
          Icon={FaBookmark}
          text="Quitar de favoritos"
          iconColor={iconColor}
        />
      ) : (
        <BtnFav
          onClick={() => handleClick("/setfavorite", true)}
          Icon={FaRegBookmark}
          text="Guardar en favoritos"
          iconColor={iconColor}
        />
      )}
    </section>
  );
}
Fav.propTypes = {
  id_universidad: PropTypes.number,
  dispatch: PropTypes.func,
  iconColor: PropTypes.string
};
export default Fav;
