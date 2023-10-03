import PropTypes from "prop-types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
const LeafletBox = forwardRef(function LeafletBox(
  { children, containerClassName, contentClassName, isExpanded },
  ref
) {
  return (
    <div
      className={twMerge(
        "leaflet-control-layers  leaflet-control",
        isExpanded ? "leaflet-control-layers-expanded" : "",
        containerClassName
      )}
      aria-haspopup="true"
      ref={ref}
    >
      <div className={twMerge("leaflet-control-layers-list", contentClassName)}>
        {children}
      </div>
    </div>
  );
});
LeafletBox.propTypes = {
  children: PropTypes.any,
  containerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  isExpanded: PropTypes.bool,
};

export default LeafletBox;
