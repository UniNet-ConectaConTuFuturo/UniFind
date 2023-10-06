import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AsideIcon({ url, Icon, texto, onClick }) {
  return (
    <Link
      to={url}
      onClick={onClick}
      className="sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300 overflow-x-hidden"
    >
      <Icon size="40" className="mx-2.5" />
      <p className="aside-p">{texto}</p>
    </Link>
  );
}
AsideIcon.propTypes = {
  url: PropTypes.string,
  Icon: PropTypes.func,
  texto: PropTypes.string,
};
export default AsideIcon;
