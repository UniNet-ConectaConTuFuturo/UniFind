import { lazy } from "react";
import { useMapa } from "../../../hooks/useMapa";
const Informacion = lazy(() => import("../../UI/Informacion"));
const LeafletControl = lazy(() => import("./UI/LeafletControl"));

import { BsFillCaretLeftFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
function AsideInfo() {
  /* Datos */
  const [searchParams] = useSearchParams();
  const { dispatchBusqueda } = useMapa();
  const idUniToShowInfo =parseInt(searchParams.get("selected"))
  return (
    <>
      {idUniToShowInfo ? (
        <section
          role="University Info"
          className="fixed top-2.5 bottom-2.5 right-0 justify-end mr-2.5"
        >
          <LeafletControl
            measure="width"
            classNameContainer="flex flex-row-reverse h-full"
            classNameToggle="h-full flex items-center"
            startOpen={true}
            IconOpen={BsFillCaretLeftFill}
          >
            <Informacion
              className="w-[20vw]"
              idUniToShowInfo={idUniToShowInfo}
              dispatch={dispatchBusqueda}
            />
          </LeafletControl>
        </section>
      ) : null}
    </>
  );
}

export default AsideInfo;
