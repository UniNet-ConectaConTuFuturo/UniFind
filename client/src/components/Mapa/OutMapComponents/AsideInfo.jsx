import { lazy } from "react";
import { useMapa } from "../../../hooks/useMapa";
const Informacion = lazy(() => import("../../UI/Informacion"));
const LeafletControl = lazy(()=> import("./UI/LeafletControl"))

import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
function AsideInfo() {
  /* Datos */
  const { idUniToShowInfo, setIdUniToShowInfo, dispatchBusqueda } = useMapa();
  return (
    <>
      {idUniToShowInfo !== 0 && (
        <section
          role="University Info"
          className="fixed top-8 bottom-8 right-0 justify-end mr-2.5"
        >
          <LeafletControl className="flex flex-row-reverse h-full" toggleClassName="h-full flex items-center" IconOpen={BsFillCaretLeftFill} IconClose={BsFillCaretRightFill}>
            <Informacion
              idUniToShowInfo={idUniToShowInfo}
              dispatch={dispatchBusqueda}
              />
          </LeafletControl>
        </section>
      )}
    </>
  );
}

export default AsideInfo;
