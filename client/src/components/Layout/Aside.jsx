import { FaHome, FaUserAlt, FaCog, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import "./aside.css";
import React from "react";
import { Link } from "react-router-dom";

class SideBarIcon extends React.Component {
  render() {
    return (
      <div
        className="sidebar-icon relative flex  
      w-16 h-16 mt-6 mb-2 mx-auto 
      shadow-lg bg-in_bg rounded-xl  hover:rounded-3xl transition-all duration-300 align-middle z-5"
      >
        {this.props.icon}
        {/* <button type="button" onClick={() => location.href="/mapa"}></button> */}
      </div>
    );
  }
}
SideBarIcon.propTypes = {
  icon: PropTypes.element,
};

const SideBar = () => {
  return (
    <div className="sidebar flex flex-col float-right fixed z-10 top-0 left-0 content-end h-screen w-32 m-0 bg-bg-sb_bg opacity-90">
      <Link to="/" className="aside-link">
      <div className="flex items-center pl-8">
        <SideBarIcon icon={<FaHome size="40" className="ml-3 mt-2.5" />} />
      <p className="aside-p flex absolute ml-16 text-white pt-3 pl-3">HOME</p>
      </div>
      </Link>
      <Link to="/identificacion/ingresante" className="aside-link">
      <div className="flex items-center pl-8">
        <SideBarIcon icon={<FaUserAlt size="40" className="ml-3 mt-2.5" />} />
      <p className="aside-p flex absolute ml-16 text-white pt-3 pl-3">LOGIN</p>
      </div>
      </Link>
      <Link to="/listainteres">
      <div className="flex items-center pl-8">
        <SideBarIcon icon={<FaStar size="40" className="ml-3 mt-2.5" />} />
      <p className="aside-p flex absolute ml-16 text-white pt-3 pl-3">FAVORITOS</p>
      </div>
      </Link>
      <Link to="/configuracion">
      <div className="flex items-center pl-8">
        <SideBarIcon icon={<FaCog size="40" className="ml-3 mt-2.5" />} />
      <p className="aside-p flex absolute ml-16 text-white pt-3 pl-3">CONFIGURACIÓN</p>
      </div>
      </Link>
    </div>
  );
};
export default SideBar;
