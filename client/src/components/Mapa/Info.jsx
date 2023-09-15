import { useMapa } from "../../hooks/useMapa";
import Informacion from "../UI/Informacion";

function Info() {
  /* Datos */
  const { idUniToShowInfo, setIdUniToShowInfo } = useMapa();
  return (
    <>
      {idUniToShowInfo !== 0 && (
        <div className="info-all fixed top-0 right-0 w-1/4 bg-white bg-no-repeat  ">
          <Informacion idUniToShowInfo={idUniToShowInfo} setIdUniToShowInfo={setIdUniToShowInfo} />
        </div>
      )}
    </>
  );
}

export default Info;
