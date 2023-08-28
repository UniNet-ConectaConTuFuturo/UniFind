import { useRef, useState } from "react";
import { useMapa } from "../../../hooks/useMapa";

import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
function GeoInfo() {
  const { provInfoEl, departamentInfoEl, idUniToShowInfo } = useMapa();
  const control = useRef(null);
  const [open, setOpen] = useState(false);
  function toggle() {
    control.current.classList.toggle("leaflet-control-layers-expanded");
    setOpen(!open);
  }
  return (
    <div
      className={
        "leaflet-top right-8 w-32 z-10 " +
        (idUniToShowInfo === 0 ? "" : "hidden")
      }
    >
      <div
        className="leaflet-control-layers leaflet-control w-full"
        aria-haspopup="true"
        ref={control}
      >
        <div className="leaflet-control-layers-list">
          <p ref={provInfoEl}></p>
          <p ref={departamentInfoEl}></p>
        </div>
        <a
          className="w-full flex justify-center"
          title="Layers"
          href="#"
          role="button"
          onClick={toggle}
        >
          {open ? (
            <BsFillCaretUpFill color="white" />
          ) : (
            <BsFillCaretDownFill color="white" />
          )}
        </a>
      </div>
    </div>
  );
}

export default GeoInfo;
