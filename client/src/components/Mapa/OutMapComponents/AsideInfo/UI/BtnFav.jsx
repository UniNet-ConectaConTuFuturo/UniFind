import PropTypes from "prop-types";
const BtnFav = ({ onClick, Icon, text }) => (
  <button
    onClick={onClick}
    className="info-but text-[10px] flex flex-col w-20 h-20 rounded border-2 border-solid justify-center items-center"
  >
    <Icon size="30" color="#FF6700" />
    <b>{text}</b>
  </button>
);
BtnFav.propTypes = {
  onClick: PropTypes.func,
  Icon: PropTypes.func,
  text: PropTypes.string,
};
export default BtnFav;
