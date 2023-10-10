import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
function LeafletControl({
  children,
  className,
  toggleClassName,
  IconClose,
  IconOpen,
}) {
  const control = useRef(null);
  const [open, setOpen] = useState(false);
  function toggle() {
    control.current.classList.toggle("leaflet-control-layers-expanded");
    setOpen((open) => !open);
  }
  return (
    <div
      className={twMerge("leaflet-control-layers  leaflet-control", className)}
      aria-haspopup="true"
      ref={control}
    >
      <div className="leaflet-control-layers-list">{children}</div>
      <a
        className={toggleClassName}
        title="Layers"
        href="#"
        role="button"
        onClick={toggle}
      >
        {open ? <IconClose /> : <IconOpen />}
      </a>
    </div>
  );
}
LeafletControl.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  toggleClassName: PropTypes.string,
  IconClose: PropTypes.func,
  IconOpen: PropTypes.func,
};

export default LeafletControl;
