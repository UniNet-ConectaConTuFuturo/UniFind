import "./aside.css";
import { FaHome, FaUserAlt, FaCog, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link /*, useLocation */ } from "react-router-dom";
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
  /* let location = useLocation();
  location.pathname nos da la direccion url */
  return (
    <aside className="sidebar flex flex-col gap-4 px-4 pt-6 fixed z-50 top-0 left-0 bottom-0 w-28 bg-bg-sb_bg opacity-90">
      <Link to="/" className="aside-link">
        <div className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300">
          <FaHome size="40" className="mx-2.5" />
          <p className="aside-p">HOME</p>
        </div>
      </Link>
      {user === userOptions.noAuthenticated && (
        <Link to="/identificacion/ingresante" className="aside-link">
          <div className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300">
            <FaUserAlt size="40" className="mx-2.5" />
            <p className="aside-p">LOGIN</p>
          </div>
        </Link>
      )}
      {user !== userOptions.noAuthenticated && (
        <Link to="/configuracion">
          <div className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300">
            <FaCog size="40" className="mx-2.5" />
            <p className="aside-p">CONFIGURACIÓN</p>
          </div>
        </Link>
      )}
      {user === userOptions.entrant && 
      (<Link to="/listainteres">
        <div className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300">
          <FaStar size="40" className="mx-2.5" />
          <p className="aside-p">FAVORITOS</p>
        </div>
      </Link>)}
      {user !== userOptions.noAuthenticated && 
       (<Link to="/listainteres">
        <div className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300">
          <FaStar size="40" className="mx-2.5" />
          <p className="aside-p">FAVORITOS</p>
        </div>
      </Link>)}
    </aside>
  );
};
export default SideBar;
