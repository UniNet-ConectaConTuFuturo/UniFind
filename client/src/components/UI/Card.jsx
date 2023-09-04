import { useEffect } from "react";
import { useState } from "react";
import { post } from "../../api/api";
//import { useGlobal } from "../../hooks/useGlobal";
import PropTypes from "prop-types";
import FormData from "form-data";
import Axios from "axios"; 
import PopUp from "./PopUp";

function Card({ id_universidad }) {
  //const { token } = useGlobal();
  const [file, setFile] = useState(null); 
  const upload = async (e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append("file",file);
        console.log(formData);
        Axios({
            url:"http://localhost:4000/enviarsolicitud",
            method: "POST",
            headers: { "Content-Type": "multipart/form-data", },
            data: formData 
        })
        /*Axios.post("localhost:4000/enviarsolicitud", formData, {
            headers: { "Content-Type": "multipart/form-data", },
    })*/

  }
  const [universidad, setUniversidad] = useState({});
  useEffect(() => {
    (async () => {
      setUniversidad(await post("/get/uni", { id_universidad }));
    })();
  }, [id_universidad]);

  const [buttonPopUp, setButtonPopUp] = useState(false);
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
        <a href="#" className="card-link">
          Ver en el mapa
        </a>
        <br/>
        <button onClick={()=> setButtonPopUp(true)}>Enviar Carta</button>

        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
          <h2 className="">Seleccione el formato de Carta</h2>
          <h3>Adjuntar carta:</h3>
          <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br /><br />
        <h3>Generar carta:</h3>
        <button className="w-20 h-4 bg-black"></button>
        </PopUp>
        {/*<input
          type="file"
          name="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}

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
