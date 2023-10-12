import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
function LeafletControl({
  children,
  startOpen,
  measure,
  classNameContainer,
  classNameContent,
  classNameToggle,
  IconOpen,
}) {
  const refContent = useRef(null);
  const refToggle = useRef(null);
  useEffect(() => {
    if (startOpen && refContent.current && refToggle.current) {
      refContent.current.classList.add("expanded");
      refToggle.current.classList.add("inverted");
    }
  }, [startOpen]);
  function toggle() {
    refToggle.current.classList.toggle("inverted");
    refContent.current.classList.toggle("expanded");
  }
  return (
    <div
      className={twMerge("leaflet-box zIndex-1000 w-fit", classNameContainer)}
    >
      <div
        ref={refContent}
        className={twMerge(measure, classNameContent, "container-transition")}
      >
        {children}
      </div>
      <a
        ref={refToggle}
        className={twMerge(classNameToggle, measure)}
        role="button"
        onClick={toggle}
      >
        <IconOpen />
      </a>
    </div>
  );
}
LeafletControl.propTypes = {
  children: PropTypes.any,
  startOpen: PropTypes.bool,
  measure: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameContent: PropTypes.string,
  classNameToggle: PropTypes.string,
  IconClose: PropTypes.func,
  IconOpen: PropTypes.func,
};

export default LeafletControl;
