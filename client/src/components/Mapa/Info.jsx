import { useEffect } from "react";
import { useMapa } from "../../hooks/useMapa";
import { post } from "../../api/api";
import { useState } from "react";
function Info() {
  const { idUniToShowInfo, setIdUniToShowInfo } = useMapa();
  const [universidad, setUniversidad] = useState({});
  const [carreras, setCarreras] = useState([]);
  useEffect(() => {
    (async () => {
      if (idUniToShowInfo === 0) return;
      setUniversidad(
        await post("/get/uni", { id_universidad: idUniToShowInfo })
      );
      setCarreras(
        await post("/get/carreras", {
          id_universidad: idUniToShowInfo,
        })
      );
    })();
  }, [idUniToShowInfo]);
  return (
    <>
      {idUniToShowInfo !== 0 && (
        <div className="fixed top-0 bottom-0 -right-8 w-1/3 bg-slate-950 bg-opacity-70">
          <div className="text-white flex flex-col content-end">
            <button
              className=""
              type="button"
              onClick={() => setIdUniToShowInfo(0)}
            >
              Cerrar
            </button>
            <p>{universidad.nombre_universidad}</p>
            <p>{universidad.direccion_universidad}</p>
            <p>{universidad.maps_universidad}</p>
            <p>{universidad.localidad_universidad}</p>
            <p>{universidad.web_universidad}</p>
            <p>{universidad.gestion_universidad}</p>
            <p>{universidad.zona_universidad}</p>
            <p>{universidad.correo_universidad}</p>
            <h2>Grados y Pregrados</h2>
            {carreras.map((carrera, i) => {
              return <p key={i}>{carrera.nombre_carrera}</p>;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Info;
