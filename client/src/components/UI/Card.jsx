import { useEffect } from "react";
import { useState } from "react";
import { post } from "../../api/api";
//import { useGlobal } from "../../hooks/useGlobal";
import PropTypes from "prop-types";
import FormData from "form-data";
import Axios from "axios"; 
import PopUpCarta from "./PopUpCarta";
import PopUpVerMas from "./PopUpVerMas";
import FileUpload from "./upload";
import { FaMapMarkerAlt, FaGlobeAmericas, FaHandHoldingUsd, FaEnvelope, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Mapa/info.css";

function Card({ id_universidad }) {
  /*const { token } = useGlobal();
  const upload = async (e)=>{
        e.preventDefault();
        const file = e.target.files[0]
        const data = new FormData();
        data.append("fileName", file.name);
        data.append("dataFile", file)
        post("/enviarsolicitud", data, {"Content-Type": "multipart/form-data"} )
         let formData = new FormData();
        await formData.append("file",file);
        console.log(formData);
        await post("/enviarsolicitud", formData, { "Content-Type": "multipart/form-data", })
         await Axios({
            url:"/api/enviarsolicitud",
            method: "POST",
            headers: { "Content-Type": "multipart/form-data", },
            data: formData 
        })
  }*/
  const [universidad, setUniversidad] = useState({});
  const [carreras, setCarreras] = useState([]);
  const [ buttonPopUpCarta, setButtonPopUpCarta ] = useState(false);
  const [ buttonPopUpVerMas, setButtonPopUpVerMas ] = useState(false);
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
      setUniversidad(
        await post("/get/uni", { id_universidad })
        );
      setCarreras(
        await post("/get/carreras", {
          id_universidad: idUniToShowInfo,
        })
      );
    })();
  }, [id_universidad]);

  return (
    <div className="card w-full h-full">
      <div className="card-body">
        <h5 className="card-title">{universidad.nombre_universidad}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Universidad de Interés
        </h6>
        <p className="card-text">
          <a
            href={universidad.maps_universidad}
            target="_blank"
            rel="noreferrer"
          >
            {universidad.direccion_universidad},{" "}
            {universidad.localidad_universidad}, {universidad.zona_universidad}
          </a>
        </p>
        <br />
        <button onClick={()=> setButtonPopUpVerMas(true)}>Ver información completa de la universidad</button>
        <br/><br/>
        <a href="#" className="card-link">
          Ver en el mapa
        </a>
        <br/>
        <button onClick={()=> setButtonPopUpCarta(true)}>Enviar Carta</button>

        <PopUpVerMas trigger={buttonPopUpVerMas} setTrigger={setButtonPopUpVerMas}>
        <div className="text-black flex flex-col content-end">
            <button
              className=""
              type="button"
              onClick={() => setIdUniToShowInfo(0)}
            >
              Cerrar
            </button>
            <p className="text-2xl my-4 pl-1">{universidad.nombre_universidad}</p>
            <div className="container flex">
              <div className="tab">
                <button className="info-btn active flex-fill ml-10">Info</button>
                <button className="info-btn flex-fill">Grados y Pregrados</button>
                <div className="line"></div>
              </div>
            </div>
            <div className="content-box">
              <div className="content">
                <p className="my-1"><FaMapMarkerAlt size="30" color="#FF6700" className="inline-block pb-1 -pl-1 my-3"/> {universidad.direccion_universidad}, {universidad.localidad_universidad}, {universidad.zona_universidad}</p>
                <p className="my-1"><Link to={universidad.web_universidad}> <FaGlobeAmericas size="30" color="#FF6700" className="inline-block pb-1 my-3"/> {universidad.web_universidad} </Link></p>
                <p className="my-1"><FaHandHoldingUsd size="30" color="#FF6700" className="inline-block pb-1 my-3 pl-1"/> Gestión: {universidad.gestion_universidad}</p>
                <p className="my-1"><FaEnvelope size="30" color="#FF6700" className="inline-block pb-1 my-3 pl-1"/> {universidad.correo_universidad}</p>
              </div>
              <div className="content">
                <div className="carreras overflow-y-scroll mt-4 mb-4 pl-1">
                  {carreras.map((carrera, i) => {
                    return <p key={i}>{carrera.nombre_carrera}</p>;
                  })}
                </div>
              </div>
            </div>
            <div className="info-botones h-36 flex justify-center gap-x-10">
            <Link to={universidad.maps_universidad} target="_blank">  
              <button className="info-but flex flex-col w-20 h-20 rounded border-2 border-solid justify-center items-center">
                <img className="info-img" src="/images/GoogleMapsIcon.png" alt="MapsIcon"/>
                <b>Localizar en Google Maps</b>
              </button>
            </Link>
            </div>
          </div>
        </PopUpVerMas>

        <PopUpCarta trigger={buttonPopUpCarta} setTrigger={setButtonPopUpCarta}>
        <h2 className=""><b>Seleccione el formato de Carta</b></h2>
          <h3>Adjuntar carta:</h3>
            <div className="app">
              <FileUpload/>
            </div>
        <br /><br />
        <h3>Generar carta:</h3>
        <button className="w-40 h-7 bg-black text-white">BOTÓN</button>
        </PopUpCarta>
        {/*<input
          type="file"
          name="file"
          id="file"
          onChange={upload}

        />
        <button onClick={(e)=>upload(e)}>Submit</button>*/}
      </div>
    </div>
  );
}
Card.propTypes = {
  id_universidad: PropTypes.number,
};

export default Card;
