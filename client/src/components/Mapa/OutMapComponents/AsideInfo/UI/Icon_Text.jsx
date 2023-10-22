import PropTypes from "prop-types";
const Icon_Text = ({ Icon, text }) => (
  <p className="my-1">
    <Icon size="30" color="#FF6700" className="inline-block pb-1 my-3 pl-1" />
    {text}
  </p>
);
Icon_Text.propTypes = {
  Icon: PropTypes.func,
  text: PropTypes.string,
};
export default Icon_Text;
