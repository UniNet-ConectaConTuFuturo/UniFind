import { useEffect } from "react";
import { useMapa } from "../../hooks/useMapa";
import { post } from "../../api/api";
import { useState } from "react";
import { FaMapMarkerAlt, FaGlobeAmericas, FaHandHoldingUsd, FaEnvelope, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./info.css";

function Info() {
  const { idUniToShowInfo, setIdUniToShowInfo } = useMapa();
  const [universidad, setUniversidad] = useState({});
  const [carreras, setCarreras] = useState([]);
  const tabs = document.querySelectorAll('.info-btn');
  const all_content = document.querySelectorAll('.content');

  tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=>{
      tabs.forEach(tab=>{tab.classList.remove('active')});
      tab.classList.add('active');

      var line = document.querySelector('.line');
      line.style.width = e.target.offsetWidth + "px";
      line.style.left = e.target.offsetLeft + "px";

      all_content.forEach(content=>{content.classList.remove('active')})
      all_content[index].classList.add('active');
    })
  })

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
        <div className="info-all fixed top-0 -right-8 w-1/4 bg-slate-950 bg-white bg-no-repeat pr-2 pl-1">
          <div className="text-black flex flex-col content-end">
            <button
              className=""
              type="button"
              onClick={() => setIdUniToShowInfo(0)}
            >
              Cerrar
            </button>
            <p className="text-2xl my-4">{universidad.nombre_universidad}</p>
            <div className="container -ml-1 flex">
              <div className="tab">
                <button className="info-btn flex-fill ml-10">Info</button>
                <button className="info-btn flex-fill">Grados y Pregrados</button>
                <div className="line"></div>
              </div>
            </div>
            <div className="content-box">
              <div className="content active">
                <p className="my-1"><FaMapMarkerAlt size="30" color="#FF6700" className="inline-block pb-1 -pl-1 my-3"/> {universidad.direccion_universidad}, {universidad.localidad_universidad}, {universidad.zona_universidad}</p>
                <p className="my-1"><Link to={universidad.web_universidad}> <FaGlobeAmericas size="30" color="#FF6700" className="inline-block pb-1 my-3"/> {universidad.web_universidad} </Link></p>
                <p className="my-1"><FaHandHoldingUsd size="30" color="#FF6700" className="inline-block pb-1 my-3"/> Gestión: {universidad.gestion_universidad}</p>
                <p className="my-1"><FaEnvelope size="30" color="#FF6700" className="inline-block pb-1 my-3"/> {universidad.correo_universidad}</p>
              </div>
              <div className="content">
                <div className="ver-mas overflow-y-scroll pr-40 mt-4 mb-4">
                  {carreras.map((carrera, i) => {
                    return <p key={i}>{carrera.nombre_carrera}</p>;
                  })}
                </div>
              </div>
            </div>
            <div className="info-botones h-36 flex justify-center gap-x-10 -pl-1">
            <Link to={universidad.maps_universidad} target="_blank">  
              <button className="info-but flex flex-col w-20 h-20 rounded border-2 border-solid justify-center items-center">
                <img className="info-img" src="/images/GoogleMapsIcon.png" alt="MapsIcon"/>
                Localizar en Google Maps
              </button>
            </Link>
              <button className="info-but flex flex-col w-20 h-20 rounded border-2 border-solid justify-center items-center">
                <FaBookmark size="30" color="#FF6700"/>
                Guardar Universidad
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Info;
