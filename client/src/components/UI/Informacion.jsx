import { useEffect, useLayoutEffect, useRef } from "react";
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
import PropTypes from "prop-types";
import { useGlobal } from "../../hooks/useGlobal";

function Informacion({ idUniToShowInfo, dispatch }) {
  /* Backend favoritos */
  const { token } = useGlobal();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (token && idUniToShowInfo) {
      (async () =>
        setIsFavorite(
          (
            await post("/isfavorite", {
              id_universidad: idUniToShowInfo,
              token,
            })
          ).value
        ))();
    }
  }, [token, idUniToShowInfo]);
  async function handleClickStar(fetch, isfavorite) {
    await post(fetch, { id_universidad: idUniToShowInfo, token });
    setIsFavorite(isfavorite);
    dispatch({ id_universidad: idUniToShowInfo });
  }
  /* Datos universidad */
  const [universidad, setUniversidad] = useState({});
  const [carreras, setCarreras] = useState([]);
  useEffect(() => {
    (async () => {
      if (!idUniToShowInfo) return;
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
  /* Diseño */
  const infoBtnRef = useRef(null);
  const carrerasBtnRef = useRef(null);
  const lineRef = useRef(null);
  const infoContentRef = useRef(null);
  const carrerasContentRef = useRef(null);
  const [btnActive, setBtnActive] = useState(true);

  function handleClick(e) {
    infoBtnRef.current.classList.toggle("active");
    carrerasBtnRef.current.classList.toggle("active");
    infoContentRef.current.classList.toggle("active");
    carrerasContentRef.current.classList.toggle("active");
    lineRef.current.style.width = e.target.offsetWidth + "px";
    lineRef.current.style.left = e.target.offsetLeft + "px";

    setBtnActive(infoBtnRef.current.classList.contains("active"));
  }
  useLayoutEffect(() => {
    if (idUniToShowInfo !== 0) {
      lineRef.current.style.width = infoBtnRef.current.offsetWidth + "px";
      lineRef.current.style.left = infoBtnRef.current.offsetLeft + "px";
    }
  }, [idUniToShowInfo]);

  return (
    <>
      <div className="text-black flex flex-col content-end">
        <p className="text-2xl my-4 pl-1">{universidad.nombre_universidad}</p>
        <section className="container flex">
          <div className="tab">
            <button
              disabled={btnActive}
              ref={infoBtnRef}
              className="info-btn flex-fill pl-10 active"
              onClick={handleClick}
            >
              Info
            </button>
            <button
              disabled={!btnActive}
              ref={carrerasBtnRef}
              className="info-btn flex-fill"
              onClick={handleClick}
            >
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
          {typeof token === "string" && (
            <>
              {isFavorite ? (
                <button
                  onClick={() => handleClickStar("/deletefavorite", false)}
                  className="info-but flex flex-col w-20 h-20 rounded border-2 border-solid justify-center items-center"
                >
                  <FaBookmark size="30" color="#FF6700" />
                  <b>Quitar de favoritos</b>
                </button>
              ) : (
                <button
                  onClick={() => handleClickStar("/setfavorite", true)}
                  className="info-but flex flex-col w-20 h-20 rounded border-2 border-solid justify-center items-center"
                >
                  <FaRegBookmark size="30" color="#FF6700" />
                  <b>Guardar en favoritos</b>
                </button>
              )}
            </>
          )}
        </section>
      </div>
    </>
  );
}
Informacion.propTypes = {
  idUniToShowInfo: PropTypes.number,
  dispatch: PropTypes.func,
};
export default Informacion;
