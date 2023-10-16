import { useRef } from "react";

import { BsFillCaretRightFill } from "react-icons/bs";
import Option from "./Option";
import MarkerSize from "./MarkerSize";
import CustomCheckBox from "./CustomCheckBox";
import { useMapa } from "../../../../hooks/useMapa";
function Options() {
  /* Front */
  const refToggle = useRef(null);
  const refContainer = useRef(null);
  const { autoZoom, setFiltrarFavoritas } = useMapa();
  function toggle() {
    refToggle.current.classList.toggle("inverted");
    refToggle.current.classList.toggle("-ml-2");
    refContainer.current.classList.toggle("expanded");
  }
  return (
    <section
      role="Extra Options"
      className="absolute bottom-2.5 left-44 flex justify-between gap-2 h-8 zIndex-1000 "
    >
      <div
        ref={refContainer}
        className="flex justify-between gap-2 container-transition width height"
      >
        <Option>
          <MarkerSize />
        </Option>
        <Option>
          <CustomCheckBox
            label="Zoom Automático"
            onChange={(e) => (autoZoom.current = e.target.checked)}
          />
        </Option>
        <Option>
          <CustomCheckBox
            label="Filtrar Favoritas"
            onChange={(e) => setFiltrarFavoritas(e.target.checked)}
          />
        </Option>
      </div>
      <a
        ref={refToggle}
        className="leaflet-box h-full flex items-center width -ml-2"
        role="button"
        onClick={toggle}
      >
        <BsFillCaretRightFill />
      </a>
    </section>
  );
}
export default Options;
