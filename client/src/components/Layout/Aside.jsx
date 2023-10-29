import "./Aside/aside.css";
import PropTypes from "prop-types";
// Back-End
import userOptions from "../../modelos/userOptions";
// Components
import AsideIcon from "./Aside/AsideIcon";
import AsideIconLock from "./Aside/AsideIconLock";
// Iconos
import {
  FaHome,
  FaUserAlt,
  FaCog,
  FaStar,
  FaMapMarkedAlt,
  FaAddressCard,
  FaRocketchat,
} from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { useLoaderData } from "react-router-dom";

function SideBar({ setTrigger }) {
  const { user } = useLoaderData();
  return (
    <aside className="sidebar flex flex-col gap-4 px-4 pt-6 fixed top-0 left-0 bottom-0 w-28 bg-bg-sb_bg opacity-90 zIndex-1001">
      <AsideIcon url="/" Icon={FaHome} texto="HOME" />
      {user === userOptions.noAuthenticated && (
        <AsideIcon url="/identificacion" Icon={FaUserAlt} texto="LOGIN" />
      )}
      <AsideIcon url="/mapa" Icon={FaMapMarkedAlt} texto="MAPA" />
      {user !== userOptions.rector && (
          <AsideIconLock
            url="/listainteres"
            Icon={FaStar}
            texto="FAVORITOS"
            condition={user === userOptions.noAuthenticated}
          />
      )}
      {user === userOptions.rector && (
        <>
          <AsideIcon url="/admision" Icon={FaAddressCard} texto="ADMISIÓN" />
          
        </>
      )}
      {user === userOptions.rector && (
        <>
          <AsideIcon
            url="/comunicacion"
            Icon={HiChatBubbleLeftRight}
            texto="COMUNICACIÓN"
          />
        </>
      )}
      {user !== userOptions.noAuthenticated && (
        <>
          <AsideIcon url="/configuracion" Icon={FaCog} texto="CONFIGURACIÓN" />
          <AsideIcon
            url="#"
            onClick={() => setTrigger(true)}
            Icon={HiOutlineLogout}
            texto="CERRAR SESIÓN"
          />
        </>
      )}
    </aside>
  );
}
SideBar.propTypes = {
  setTrigger: PropTypes.func,
};
export default SideBar;
