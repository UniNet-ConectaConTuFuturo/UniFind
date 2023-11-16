import PropTypes from "prop-types";
const Icon_Text = ({ Icon, text, iconColor }) => (
  <p className="flex justify-start gap-2">
    <Icon size="25" color={iconColor} />
    {text}
  </p>
);
Icon_Text.propTypes = {
  Icon: PropTypes.func,
  text: PropTypes.string,
  iconColor: PropTypes.string
};
export default Icon_Text;
