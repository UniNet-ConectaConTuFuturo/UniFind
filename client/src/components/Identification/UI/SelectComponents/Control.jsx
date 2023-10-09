import PropTypes from "prop-types";
import { components } from "react-select";

const Control = ({ children, ...rest }) => (
  <components.Control
    {...rest}
    className="outline-0 border-0 bg-transparent text-white"
  >
    {children}
  </components.Control>
);
Control.propTypes = {
  children: PropTypes.any,
};
export default Control;
