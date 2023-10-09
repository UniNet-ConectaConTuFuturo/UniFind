import PropTypes from "prop-types";
import { components } from "react-select";

const Control = ({ children, ...rest }) => (
  <components.Control {...rest} className="bg-transparent">
    {children}
  </components.Control>
);
Control.propTypes = {
  children: PropTypes.any,
};
export default Control;
