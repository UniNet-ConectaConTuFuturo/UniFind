import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaLock } from "react-icons/fa";
function AsideIconLock({ url, Icon, texto, condition }) {
  return (
    <Link
      to={url}
      title={condition ? "Debe iniciar sesión" : ""}
      className={
        (condition ? "disabled" : "") +
        " sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300 overflow-x-hidden"
      }
    >
      <div className="mx-2.5 relative">
        <FaLock size="20" className="absolute bottom-0 right-0" />
        <Icon size="40" />
      </div>
      <p className="aside-p">{texto}</p>
    </Link>
  );
}
AsideIconLock.propTypes = {
  url: PropTypes.string,
  Icon: PropTypes.func,
  texto: PropTypes.string,
  condition: PropTypes.bool,
};
export default AsideIconLock;
