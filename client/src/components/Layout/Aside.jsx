import "./aside.css";

// Iconos
import {
  FaHome,
  FaUserAlt,
  FaCog,
  FaStar,
  /* FaBookmark, */
  FaMapMarkedAlt,
  FaLock,
  FaAddressCard,
} from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

import { useEffect, useState } from "react";
import { Link /* , useMatch */ } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";
import { post } from "../../api/api";

const SideBar = () => {
  const userOptions = {
    noAuthenticated: "noAuthenticated",
    entrant: "entrant",
    rector: "rector",
  };
  const { token } = useGlobal();
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await post("/auth", { token });
      setUser(res.user);
    })();
  }, [token]);
  return (
    <aside className="sidebar flex flex-col gap-4 px-4 pt-6 fixed z-50 top-0 left-0 bottom-0 w-28 bg-bg-sb_bg opacity-90">
      <Link
        to="/"
        className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300 overflow-x-hidden"
      >
        <FaHome size="40" className="mx-2.5" />
        <p className="aside-p">HOME</p>
      </Link>
      {user === userOptions.noAuthenticated && (
        <Link
          to="/identificacion/ingresante"
          className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300 overflow-x-hidden"
        >
          <FaUserAlt size="40" className="mx-2.5" />
          <p className="aside-p">LOGIN</p>
        </Link>
      )}
      <Link
        to="/mapa"
        className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300 overflow-x-hidden"
      >
        <FaMapMarkedAlt size="40" className="mx-2.5" />
        <p className="aside-p">MAPA</p>
      </Link>
      {user !== userOptions.rector && (
        <Link
          to="/listainteres"
          title={
            user === userOptions.noAuthenticated ? "Debe iniciar sesión" : ""
          }
          className={
            (user === userOptions.noAuthenticated ? "disabled" : "") +
            " sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300 overflow-x-hidden"
          }
        >
          <div className="mx-2.5 relative">
            <FaLock size="20" className="absolute bottom-0 right-0" />
            <FaStar size="40" />
          </div>
          <p className="aside-p">FAVORITOS</p>
        </Link>
      )}
      {user === userOptions.rector && (
        <Link
          to="/admision"
          className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300 overflow-x-hidden"
        >
          <FaAddressCard size="40" className="mx-2.5" />
          <p className="aside-p">ADMISIÓN</p>
        </Link>
      )}
      <Link
        to="/chat/ingresante"
        title={
          user === userOptions.noAuthenticated ? "Debe iniciar sesión" : ""
        }
        className={
          (user === userOptions.noAuthenticated ? "disabled" : "") +
          " sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300 overflow-x-hidden"
        }
      >
        <div className="mx-2.5 relative">
          <FaLock size="20" className="absolute bottom-0 right-0" />
          <HiChatBubbleLeftRight size="40" />
        </div>
        <p className="aside-p">CHAT</p>
      </Link>
      {user !== userOptions.noAuthenticated && (
        <Link
          to="/configuracion"
          className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300 overflow-x-hidden"
        >
          <FaCog size="40" className="mx-2.5" />
          <p className="aside-p">CONFIGURACIÓN</p>
        </Link>
      )}
      {user !== userOptions.noAuthenticated && (
        <Link
          to="/"
          className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300 overflow-x-hidden"
        >
          <HiOutlineLogout size="40" className="mx-2.5" />
          <p className="aside-p">CERRAR SESIÓN</p>
        </Link>
      )}
    </aside>
  );
};
export default SideBar;
