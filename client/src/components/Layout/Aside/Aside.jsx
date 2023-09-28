import "./aside.css";
// Back-End
import userOptions from "../../../modelos/userOptions";
import { post } from "../../../api/api";
import { useEffect, useState } from "react";
import { useGlobal } from "../../../hooks/useGlobal";
/* import { useMatch  } from "react-router-dom"; */
// Components
import AsideIcon from "./AsideIcon";
import AsideIconLock from "./AsideIconLock";
// Iconos
import {
  FaHome,
  FaUserAlt,
  FaCog,
  FaStar,
  FaMapMarkedAlt,
  FaAddressCard,
} from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const SideBar = () => {
  const { token } = useGlobal();
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await post("/auth", { token });
      setUser(res.user);
    })();
  }, [token]);
  return (
    <aside className="sidebar flex flex-col gap-4 px-4 pt-6 fixed top-0 left-0 bottom-0 w-28 bg-bg-sb_bg opacity-90 zIndex-1001">
      <AsideIcon url="/" Icon={FaHome} texto="HOME" />
      {user === userOptions.noAuthenticated && (
        <AsideIcon
          url="/identificacion/ingresante"
          Icon={FaUserAlt}
          texto="LOGIN"
        />
      )}
      <AsideIcon url="/mapa" Icon={FaMapMarkedAlt} texto="MAPA" />
      {user !== userOptions.rector && (
        <>
          <AsideIconLock
            url="/listainteres"
            Icon={FaStar}
            texto="FAVORITOS"
            condition={user === userOptions.noAuthenticated}
          />
          <AsideIconLock
            url="/chat/ingresante"
            Icon={HiChatBubbleLeftRight}
            texto="CHAT"
            condition={user === userOptions.noAuthenticated}
          />
        </>
      )}
      {user === userOptions.rector && (
        <AsideIcon url="/admision" Icon={FaAddressCard} texto="ADMISIÓN" />
      )}
      {user !== userOptions.noAuthenticated && (
        <>
          <AsideIcon url="/configuracion" Icon={FaCog} texto="CONFIGURACIÓN" />
          <AsideIcon url="#" Icon={HiOutlineLogout} texto="CERRAR SESIÓN" />
        </>
      )}
    </aside>
  );
};
export default SideBar;
