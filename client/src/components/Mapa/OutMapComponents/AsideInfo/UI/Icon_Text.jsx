import PropTypes from "prop-types";
const Icon_Text = ({ Icon, text }) => (
  <p className="flex justify-start gap-2">
    <Icon size="25" color="#FF6700" />
    {text}
  </p>
);
Icon_Text.propTypes = {
  Icon: PropTypes.func,
  text: PropTypes.string,
};
export default Icon_Text;
