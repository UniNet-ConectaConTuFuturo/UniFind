import { lazy } from "react";
import { useMapa } from "../../../hooks/useMapa";
const Informacion = lazy(() => import("../../UI/Informacion"));
function AsideInfo() {
  /* Datos */
  const { idUniToShowInfo, setIdUniToShowInfo, dispatchBusqueda } = useMapa();
  return (
    <>
      {idUniToShowInfo !== 0 && (
        <section
          role="University Info"
          className="info-all fixed top-0 right-0 w-1/4 bg-white bg-no-repeat  "
        >
          <button
            className="flex self-end  justify-center bg-black w-5 text-white rounded-full"
            type="button"
            onClick={() => setIdUniToShowInfo(0)}
          >
            X
          </button>
          <Informacion
            idUniToShowInfo={idUniToShowInfo}
            dispatch={dispatchBusqueda}
          />
        </section>
      )}
    </>
  );
}

export default AsideInfo;
