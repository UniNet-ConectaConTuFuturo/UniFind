// Components
import Carrera from "./Carrera";
import Nombre from "./Nombre";
import Gestion from "./Gestion";
import { BsFillCaretDownFill } from "react-icons/bs";
import LeafletControl from "../UI/LeafletControl";

function Filters() {
  return (
    <section
      role="Filters"
      className="absolute top-2.5 left-32 pr-12"
      style={{ right: "20vw" }}
    >
      <LeafletControl
        measure="height"
        classNameContainer="w-full"
        classNameToggle="w-full flex justify-center"
        IconOpen={BsFillCaretDownFill}
      >
        <div className="grid grid-cols-3 gap-[1vw] text-center p-1 pb-0">
          <Carrera />
          <Nombre />
          <Gestion />
        </div>
      </LeafletControl>
    </section>
  );
}
export default Filters;
