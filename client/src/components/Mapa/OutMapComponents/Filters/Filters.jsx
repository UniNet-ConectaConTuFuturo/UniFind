// Back
import { useEffect, useRef } from "react";
import { useMapa } from "../../../../hooks/useMapa";

// Components
import Carrera from "./Carrera";
import Nombre from "./Nombre";
import Gestion from "./Gestion";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import LeafletControl from "../UI/LeafletControl";

function Filters() {
  /* Back */
  const { idUniToShowInfo } = useMapa();
  /* Front */
  const containerRef = useRef(null);
  useEffect(() => {
    idUniToShowInfo === 0
      ? (containerRef.current.classList = "leaflet-top left-32 right-48")
      : (containerRef.current.classList = "leaflet-top left-32 right-1/3");
  }, [idUniToShowInfo]);
  return (
    <section role="Filters" ref={containerRef}>
      <LeafletControl
        className="w-full"
        toggleClassName="w-full flex justify-center"
        IconClose={BsFillCaretUpFill}
        IconOpen={BsFillCaretDownFill}
      >
        <nav className="w-full grid grid-flow-col gap-4 text-center mb-1.5">
          <Carrera />
          <Nombre />
          <Gestion />
        </nav>
      </LeafletControl>
    </section>
  );
}
export default Filters;
