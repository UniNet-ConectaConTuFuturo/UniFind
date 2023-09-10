import { useEffect, useRef } from "react";
import { useMapa } from "../../hooks/useMapa";
import { post } from "../../api/api";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaHandHoldingUsd,
  FaEnvelope,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./info.css";

function Info() {
  /* Datos */
  const { idUniToShowInfo, setIdUniToShowInfo } = useMapa();
  const [universidad, setUniversidad] = useState({});
  const [carreras, setCarreras] = useState([]);
  /* Diseño */
  const btnRef = useRef(null);
  const lineRef = useRef(null);
  const infoContentRef = useRef(null);
  const carrerasContentRef = useRef(null);

  function handleClick(e) {
    if (btnRef.current) btnRef.current.classList.toggle("active");
    btnRef.current = e.target;
    btnRef.current.classList.toggle("active");
    infoContentRef.current.classList.toggle("active");
    carrerasContentRef.current.classList.toggle("active");
    lineRef.current.style.width = btnRef.current.offsetWidth + "px";
    lineRef.current.style.left = btnRef.current.offsetLeft + "px";
  }

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
        <div className="info-all fixed top-0 right-0 w-1/4 bg-white bg-no-repeat  ">
          <div className="text-black flex flex-col content-end">
            <button
              className="flex self-end  justify-center bg-black w-5 text-white rounded-full"
              type="button"
              onClick={() => setIdUniToShowInfo(0)}
            >
              X
            </button>
            <p className="text-2xl my-4 pl-1">
              {universidad.nombre_universidad}
            </p>
            <section className="container flex">
              <div className="tab">
                <button
                  className="info-btn flex-fill pl-10 active"
                  onClick={handleClick}
                >
                  Info
                </button>
                <button className="info-btn flex-fill" onClick={handleClick}>
                  Grados y Pregrados
                </button>
                <div ref={lineRef} className="line"></div>
              </div>
            </section>
            <section className="content-box">
              <article ref={infoContentRef} className="content active">
                <p className="my-1">
                  <FaMapMarkerAlt
                    size="30"
                    color="#FF6700"
                    className="inline-block pb-1 -pl-1 my-3"
                  />{" "}
                  {universidad.direccion_universidad},{" "}
                  {universidad.localidad_universidad},{" "}
                  {universidad.zona_universidad}
                </p>
                <p className="my-1">
                  <Link to={universidad.web_universidad}>
                    {" "}
                    <FaGlobeAmericas
                      size="30"
                      color="#FF6700"
                      className="inline-block pb-1 my-3"
                    />{" "}
                    {universidad.web_universidad}{" "}
                  </Link>
                </p>
                <p className="my-1">
                  <FaHandHoldingUsd
                    size="30"
                    color="#FF6700"
                    className="inline-block pb-1 my-3 pl-1"
                  />{" "}
                  Gestión: {universidad.gestion_universidad}
                </p>
                <p className="my-1">
                  <FaEnvelope
                    size="30"
                    color="#FF6700"
                    className="inline-block pb-1 my-3 pl-1"
                  />{" "}
                  {universidad.correo_universidad}
                </p>
              </article>
              <article ref={carrerasContentRef} className="content">
                <div className="carreras overflow-y-scroll mt-4 mb-4 pl-1">
                  {carreras.map((carrera, i) => {
                    return <p key={i}>{carrera.nombre_carrera}</p>;
                  })}
                </div>
              </article>
            </section>
            <section className="info-botones h-36 flex justify-center gap-x-10">
              <Link to={universidad.maps_universidad} target="_blank">
                <button className="info-but flex flex-col w-20 h-20 rounded border-2 border-solid justify-center items-center">
                  <img
                    className="info-img"
                    src="/images/GoogleMapsIcon.png"
                    alt="MapsIcon"
                  />
                  <b>Localizar en Google Maps</b>
                </button>
              </Link>
              <button className="info-but flex flex-col w-20 h-20 rounded border-2 border-solid justify-center items-center">
                <FaRegBookmark size="30" color="#FF6700" />
                <b>Guardar Universidad</b>
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Info;
