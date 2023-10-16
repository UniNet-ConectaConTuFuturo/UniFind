import PropTypes from "prop-types";
function Option({ children }) {
  return (
    <section className="leaflet-box flex items-center justify-between gap-2 px-2 text-gray-600 ">
      {children}
    </section>
  );
}
Option.propTypes = {
  children: PropTypes.element,
};
export default Option;
