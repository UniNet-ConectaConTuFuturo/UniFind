import PropTypes from "prop-types";
const NoRefererLink = ({ href, Icon, text }) => (
  <a
    className="flex justify-start gap-2"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <Icon size="25" color="#FF6700" />
    {text}
  </a>
);
NoRefererLink.propTypes = {
  href: PropTypes.string,
  Icon: PropTypes.func,
  text: PropTypes.string,
};
export default NoRefererLink;
