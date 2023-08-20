import { FaHome, FaUserAlt, FaCog } from "react-icons/fa";
import PropTypes from "prop-types";
import "./aside.css";
import React from "react";
import { Link } from "react-router-dom";

class SideBarIcon extends React.Component {
  render() {
    return (
      <div
        className="sidebar-icon relative flex items-center justify-center 
      w-16 h-16 mt-6 mb-2 mx-auto 
      shadow-lg bg-in_bg rounded-xl  hover:rounded-3xl transition-all duration-300"
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
    <div className="flex flex-col float-right fixed z-10 top-0 left-0 content-end h-screen w-32 m-0 bg-bg-sb_bg opacity-90">
      <Link to="/">
        <SideBarIcon icon={<FaHome size="40" />} />
      </Link>
      <Link to="/identificacion/ingresante">
        <SideBarIcon icon={<FaUserAlt size="40" />} />
      </Link>
      <Link to="/configuracion">
        <SideBarIcon icon={<FaCog size="40" />} />
      </Link>
    </div>
  );
};
export default SideBar;
