// Components
import Carrera from "./Carrera";
import Nombre from "./Nombre";
import Gestion from "./Gestion";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import LeafletControl from "../UI/LeafletControl";

function Filters() {
  return (
    <section
      role="Filters"
      className="leaflet-top left-32 pr-12"
      style={{ right: "20vw" }}
    >
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
