import { useRef, useState } from "react";
import Carrera from "./Filters/Carrera";
import Nombre from "./Filters/Nombre";
import Gestion from "./Filters/Gestion";

function Filters() {
  const control = useRef(null);
  /* function onMouseOver() {
    control.current.className =
      "leaflet-control-layers  leaflet-control leaflet-control-layers-expanded";
  }
  function onMouseOut() {
    control.current.className = "leaflet-control-layers  leaflet-control";
  } */
  const [carreras, setCarreras] = useState([]);
  const selectCarreras = useRef("");
  function filterCarreras() {
    const value = selectCarreras.current.value;
    if (value !== "") setCarreras([...carreras, value]);
    selectCarreras.current.value = "";
  }

  const [nombres, setNombres] = useState([]);
  const selectNombre = useRef("");
  function filterNombres() {
    const value = selectNombre.current.value;
    if (value != "") setNombres([...nombres, value]);
    selectNombre.current.value = "";
  }

  const [gestion, setGestion] = useState(0);
  const selectGestion = useRef("0");
  function filterGestion() {
    setGestion(selectGestion.current.value);
  }
  function onClick() {
    filterCarreras();
    filterNombres();
    filterGestion();
  }
  return (
    <div className="leaflet-top left-48 right-1/4">
      <div
        className="leaflet-control-layers  leaflet-control leaflet-control-layers-expanded w-full"
        aria-haspopup="true"
        /* onMouseOver={onMouseOver}
        onMouseOut={onMouseOut} */
        ref={control}
      >
        <a
          className="leaflet-control-layers-toggle"
          title="Layers"
          href="#"
          role="button"
        ></a>
        <div className="w-full flex justify-between items-start">
          <button
            className="border-black border relative self-center py-4"
            onClick={onClick}
          >
            Filtrar
          </button>
          <section className="w-full flex justify-between items-start flex-row text-center">
            <Carrera
              carreras={carreras}
              setCarreras={setCarreras}
              selectCarreras={selectCarreras}
            />
            <Nombre
              nombres={nombres}
              setNombres={setNombres}
              selectNombre={selectNombre}
            />
            <Gestion selectGestion={selectGestion} />
          </section>
        </div>
      </div>
    </div>
  );
}
export default Filters;
