import { useRef, useState } from "react";
import { useMarkers } from "../../../hooks/useMarkers";

import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
function Options() {
  const { setDistanciaMarcadores, setFiltrarFavoritas } = useMarkers();
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
  function distanciaOnChange(e) {
    setDistanciaMarcadores(e.target.value);
  }
  return (
    <div className="leaflet-bottom left-48 flex justify-between">
      <div
        className="leaflet-control-layers  leaflet-control flex justify-between items-center"
        aria-haspopup="true"
        ref={control}
      >
        <div className="leaflet-control-layers-list">
          <section className="flex justify-between gap-2 px-2 text-gray-600">
            <label htmlFor="distancia">Distancia marcadores:</label>
            <input
              type="range"
              name="distancia"
              id="distancia"
              defaultValue={10}
              min={0}
              max={15}
              step={1}
              onChange={distanciaOnChange}
            />
            {/* <select
            name="distancia"
            id="distancia"
            defaultValue="10"
            onChange={distanciaOnChange}
          >
            <option value={13}>Muy cercano</option>
            <option value={10}>Cercano</option>
            <option value={6.5}>Intermedio</option>
            <option value={0}>Lejano</option>
          </select> */}
          </section>
        </div>
      </div>
      <div
        className="leaflet-control-layers  leaflet-control flex justify-between items-center"
        aria-haspopup="true"
        ref={control2}
      >
        <div className="leaflet-control-layers-list">
          <section className="flex justify-between gap-2 px-2 text-gray-600 ">
            <label htmlFor="fav">Filtrar favoritas </label>
            <input
              type="checkbox"
              name="fav"
              id="fav"
              onChange={(e) => setFiltrarFavoritas(e.target.checked)}
            />
          </section>
        </div>
      </div>
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
