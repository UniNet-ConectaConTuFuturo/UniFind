import PropTypes from "prop-types";
const NoRefererLink = ({ href, Icon, text, iconColor }) => (
  <a
    className="flex justify-start gap-2"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <Icon size="25" color={iconColor} />
    {text}
  </a>
);
NoRefererLink.propTypes = {
  href: PropTypes.string,
  Icon: PropTypes.func,
  text: PropTypes.string,
  iconColor: PropTypes.string
};
export default NoRefererLink;
