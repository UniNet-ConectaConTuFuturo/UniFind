import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { get, post } from "../../../../api/api";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import BtnFav from "./UI/BtnFav";

function Fav({ id_universidad, dispatch, iconColor }) {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (id_universidad) {
      (async () =>
        setIsFavorite((await get("/isfavorite", { id_universidad })).value))();
    }
  }, [id_universidad]);
  async function handleClick(url, isfavorite) {
    post(url, { id_universidad });
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
  iconColor: PropTypes.string,
};
export default Fav;
