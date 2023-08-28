// Back
import { useEffect, useRef, useState } from "react";
import { useMapa } from "../../../hooks/useMapa";

// Components
import Carrera from "./Filters/Carrera";
import Nombre from "./Filters/Nombre";
import Gestion from "./Filters/Gestion";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

function Filters() {
  /* Back */
  const { idUniToShowInfo } = useMapa();
  /* Front */
  const control = useRef(null);
  const [open, setOpen] = useState(false);
  function toggle() {
    control.current.classList.toggle("leaflet-control-layers-expanded");
    setOpen(!open);
  }
  const [rightLeftStyle, setRightLeftStyle] = useState("left-48 right-48");
  useEffect(() => {
    idUniToShowInfo !== 0
      ? setRightLeftStyle("left-32 right-1/3")
      : setRightLeftStyle("left-32 right-48");
  }, [idUniToShowInfo]);
  return (
    <div className={"leaflet-top z-10 " + rightLeftStyle}>
      <div
        className="leaflet-control-layers  leaflet-control w-full"
        aria-haspopup="true"
        ref={control}
      >
        <div className="leaflet-control-layers-list">
          <div className="w-full flex justify-between items-start ">
            <section className="w-full flex justify-between items-start flex-row text-center">
              <Carrera />
              <Nombre />
              <Gestion />
            </section>
          </div>
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
export default Filters;
