import { useMapa } from "../../../hooks/useMapa";
import LeafletBox from "./UI/LeafletBox";
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
      <LeafletBox
        containerClassName="absolute w-60 draggable"
        isExpanded={true}
      >
        <article className="flex justify-between cursor-move">
          <section>
            <p ref={provInfo}></p>
            <p ref={depInfo}></p>
          </section>
          <BiMove size={10} />
        </article>
      </LeafletBox>
    </Rnd>
  );
}

export default GeoInfo;
