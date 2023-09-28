import { useRef, useState } from "react";

import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import MarkersDistance from "./MarkersDistance";
import FavFilter from "./FavFilter";
import Option from "./Option";
function Options() {
  /* Front */
  const control = useRef(null);
  const control2 = useRef(null);
  const [open, setOpen] = useState(false);
  function toggle() {
    control.current.classList.toggle("leaflet-control-layers-expanded");
    control2.current.classList.toggle("leaflet-control-layers-expanded");
    control2.current.classList.toggle("ml-4");
    setOpen(!open);
  }
  return (
    <div className="leaflet-bottom left-48 flex justify-between">
      <Option ref={control}>
        <MarkersDistance />
      </Option>
      <Option ref={control2}>
        <FavFilter />
      </Option>
      <div
        className={
          "leaflet-control-layers  leaflet-control " + (open ? "ml-4" : "")
        }
      >
        <a
          className="h-full min-h-[2.5rem] flex items-center"
          title="Layers"
          href="#"
          role="button"
          onClick={toggle}
        >
          {open ? (
            <BsFillCaretLeftFill color="white" />
          ) : (
            <BsFillCaretRightFill color="white" />
          )}
        </a>
      </div>
    </div>
  );
}
export default Options;
