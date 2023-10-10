import { lazy } from "react";
import { useMapa } from "../../../hooks/useMapa";
const Informacion = lazy(() => import("../../UI/Informacion"));
const LeafletControl = lazy(() => import("./UI/LeafletControl"));

import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
function AsideInfo() {
  /* Datos */
  const { idUniToShowInfo, dispatchBusqueda } = useMapa();
  return (
    <>
      {idUniToShowInfo !== 0 && (
        <section
          role="University Info"
          className="fixed top-2.5 bottom-2.5 right-0 justify-end mr-2.5"
        >
          <LeafletControl
            className="flex flex-row-reverse h-full leaflet-control-layers-expanded"
            toggleClassName="h-full flex items-center"
            IconOpen={BsFillCaretLeftFill}
            IconClose={BsFillCaretRightFill}
          >
            <div style={{ width: "20vw" }}>
              <Informacion
                idUniToShowInfo={idUniToShowInfo}
                dispatch={dispatchBusqueda}
              />
            </div>
          </LeafletControl>
        </section>
      )}
    </>
  );
}

export default AsideInfo;
