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
} from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { useLoaderData, useNavigation } from "react-router-dom";

function SideBar({ setTrigger }) {
  const { user } = useLoaderData();
  const { state, location } = useNavigation();

  return (
    <aside className="sidebar flex flex-col gap-4 px-4 pt-6 fixed top-0 left-0 bottom-0 w-28 bg-bg-sb_bg opacity-90 z-[1001]">
      <AsideIcon
        url="/"
        Icon={FaHome}
        texto="HOME"
        className={
          state === "loading" && location.pathname === "/"
            ? "pointer-events-none opacity-25"
            : ""
        }
      />
      {user === userOptions.noAuthenticated && (
        <AsideIcon
          url="/identificacion"
          Icon={FaUserAlt}
          texto="LOGIN"
          className={
            state === "loading" && location.pathname === "/identificacion"
              ? "pointer-events-none opacity-25"
              : ""
          }
        />
      )}
      <AsideIcon
        url="/mapa"
        Icon={FaMapMarkedAlt}
        texto="MAPA"
        className={
          state === "loading" && location.pathname === "/mapa"
            ? "pointer-events-none opacity-25"
            : ""
        }
      />
      {user !== userOptions.rector && (
        <AsideIconLock
          url="/listainteres"
          Icon={FaStar}
          texto="FAVORITOS"
          condition={user === userOptions.noAuthenticated}
          className={
            state === "loading" && location.pathname === "/listainteres"
              ? "pointer-events-none opacity-25"
              : ""
          }
        />
      )}
      {user === userOptions.rector && (
        <>
          <AsideIcon
            url="/admision"
            Icon={FaAddressCard}
            texto="ADMISIÓN"
            className={
              state === "loading" && location.pathname === "/admision"
                ? "pointer-events-none opacity-25"
                : ""
            }
          />
        </>
      )}
      {user === userOptions.rector && (
        <>
          <AsideIcon
            url="/comunicacion"
            Icon={HiChatBubbleLeftRight}
            texto="COMUNICACIÓN"
            className={
              state === "loading" && location.pathname === "/comunicacion"
                ? "pointer-events-none opacity-25"
                : ""
            }
          />
        </>
      )}
      {user !== userOptions.noAuthenticated && (
        <>
          <AsideIcon
            url="/configuracion"
            Icon={FaCog}
            texto="CONFIGURACIÓN"
            className={
              state === "loading" && location.pathname === "/configuracion"
                ? "pointer-events-none opacity-25"
                : ""
            }
          />
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
