import { useEffect } from "react";
import { useMapa } from "../../hooks/useMapa";
import { post } from "../../api/api";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./info.css";

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
        <div className="fixed top-0 h-screen -right-8 w-1/3 bg-slate-950 bg-white pr-2">
          <div className="text-black flex flex-col content-end">
            <button
              className=""
              type="button"
              onClick={() => setIdUniToShowInfo(0)}
            >
              Cerrar
            </button>
            <p className="text-xl my-3">{universidad.nombre_universidad}</p>
            <p>{universidad.direccion_universidad}</p>
            <Link to={universidad.maps_universidad}>
              <FaMapMarkerAlt size="20" color="red"/>
            </Link>
            <p>{universidad.localidad_universidad}</p>
            <p>{universidad.web_universidad}</p>
            <p>Gestión: {universidad.gestion_universidad}</p>
            <p>{universidad.zona_universidad}</p>
            <p>{universidad.correo_universidad}</p>
            <h2>Grados y Pregrados</h2>
            <div className="ver-mas overflow-y-scroll">
              {carreras.map((carrera, i) => {
                return <p key={i}>{carrera.nombre_carrera}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Info;
