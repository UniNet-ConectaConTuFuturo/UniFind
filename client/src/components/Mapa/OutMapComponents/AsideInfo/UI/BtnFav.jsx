import PropTypes from "prop-types";
const BtnFav = ({ onClick, Icon, text, iconColor, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={
      "w-full info-but text-[10px] flex flex-col h-20 rounded border-2 border-solid justify-center items-center"
    }
  >
    <Icon size="30" color={iconColor} />
    <b>{text}</b>
  </button>
);
BtnFav.propTypes = {
  onClick: PropTypes.func,
  Icon: PropTypes.func,
  text: PropTypes.string,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
};
export default BtnFav;
