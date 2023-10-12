import { useRef, useState } from "react";

import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import FavFilter from "./FavFilter";
import Option from "./Option";
import AutoZoom from "./AutoZoom";
function Options() {
  console.log("options");
  /* Front */
  const refToggle = useRef(null);
  const refContainer = useRef(null);
  function toggle() {
    refToggle.current.classList.toggle("inverted");
    refContainer.current.classList.toggle("expanded");
  }
  return (
    <section
      role="Extra Options"
      className="absolute bottom-2.5 left-44 flex justify-between gap-2 zIndex-1000"
    >
      <div
        ref={refContainer}
        className="flex justify-between gap-2 container-transition width height"
      >
        <Option>
          <AutoZoom />
        </Option>
        <Option>
          <FavFilter />
        </Option>
      </div>
      <a
        ref={refToggle}
        className="leaflet-box h-full min-h-[2.5rem] flex items-center width"
        role="button"
        onClick={toggle}
      >
        <BsFillCaretRightFill />
      </a>
    </section>
  );
}
export default Options;
