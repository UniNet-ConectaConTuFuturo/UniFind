// Back
import { useRef, useState } from "react";
import { useMarkers } from "../../../context/Markers/useMarkers";
import * as set from "../../../api/markers/setFilters.js";

// Components
import Carrera from "./Filters/Carrera";
import Nombre from "./Filters/Nombre";
import Gestion from "./Filters/Gestion";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

function Filters() {
  /* Back */
  const {
    carreras,
    setCarreras,
    selectCarreras,
    nombres,
    setNombres,
    selectNombre,
    setGestion,
    selectGestion,
  } = useMarkers();

  function onClick() {
    set.filterCarreras(selectCarreras, setCarreras, carreras);
    set.filterNombres(selectNombre, setNombres, nombres);
    set.filterGestion(setGestion, selectGestion);
  }

  /* Front */
  const control = useRef(null);
  const [open, setOpen] = useState(false);
  function toggle() {
    control.current.classList.toggle("leaflet-control-layers-expanded");
    setOpen(!open);
  }
  return (
    <div className="leaflet-top left-48 right-1/4">
      <div
        className="leaflet-control-layers  leaflet-control w-full"
        aria-haspopup="true"
        ref={control}
      >
        <div className="leaflet-control-layers-list">
          <div className="w-full flex justify-between items-start ">
            <button
              className="border-black border relative self-center py-4"
              onClick={onClick}
            >
              Filtrar
            </button>
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
