import PropTypes from "prop-types";
import { forwardRef } from "react";

const Option = forwardRef(function Option({ children }, ref) {
  return (
    <div
      className="leaflet-control-layers  leaflet-control flex justify-between items-center"
      aria-haspopup="true"
      ref={ref}
    >
      <div className="leaflet-control-layers-list">
        <section className="flex justify-between gap-2 px-2 text-gray-600">
          {children}
        </section>
      </div>
    </div>
  );
});
Option.propTypes = {
  children: PropTypes.element,
};
export default Option;
