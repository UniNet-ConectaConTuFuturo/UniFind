import PropTypes from "prop-types";
const NoRefererLink = ({ href, Icon, text }) => (
  <a className="my-1 block" href={href} target="_blank" rel="noreferrer">
    <Icon size="30" color="#FF6700" className="inline-block pb-1 -pl-1 my-3" />
    {text}
  </a>
);
NoRefererLink.propTypes = {
  href: PropTypes.string,
  Icon: PropTypes.func,
  text: PropTypes.string,
};
export default NoRefererLink;
