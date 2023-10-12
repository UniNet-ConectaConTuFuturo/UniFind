import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaLock } from "react-icons/fa";
import { Tooltip } from "antd";
/*
const InlineDialog = styled(TooltipPrimitive)`
  background: white;
  border-radius: ${token("border.radius", "4px")};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-sizing: content-box; // do not set this to border-box or it will break the overflow handling
  color: #333;
  max-height: 300px;
  max-width: 300px;
  padding: ${token("space.100", "8px")} ${token("space.150", "12px")};
`; */
const AsideIconLock = ({ url, Icon, texto, condition }) => (
  <Tooltip title="Debe iniciar sesión" placement="right">
    <Link
      to={url}
      onClick={(e) => { if (condition) e.preventDefault(); }}
      className={
        (condition ? "disabled" : "") +
        " sidebar-icon relative flex justify-start items-center h-16 w-16 shadow-lg bg-in_bg rounded-xl hover:rounded-3xl transition-all duration-300 overflow-x-hidden"
      }
    >
      <div className="mx-2.5 relative">
        <FaLock size="20" color="white" className="absolute bottom-0 right-0" />
        <Icon size="40" color="white" />
      </div>
      <p className="aside-p">{texto}</p>
    </Link>
  </Tooltip>
);

AsideIconLock.propTypes = {
  url: PropTypes.string,
  Icon: PropTypes.func,
  texto: PropTypes.string,
  condition: PropTypes.bool,
};
export default AsideIconLock;
