import { useMapa } from "../../../hooks/useMapa";
import { Rnd } from "react-rnd";
import { BiMove } from "react-icons/bi";
function GeoInfo() {
  const { provInfo, depInfo } = useMapa();
  return (
    <Rnd
      default={{
        x: window.innerWidth * 0.78,
        y: 11,
      }}
      enableResizing={false}
    >
      <article className="leaflet-box p-1 w-60 draggable flex justify-between cursor-move">
        <section>
          <p ref={provInfo}></p>
          <p ref={depInfo}></p>
        </section>
        <BiMove size={10} />
      </article>
    </Rnd>
  );
}

export default GeoInfo;
