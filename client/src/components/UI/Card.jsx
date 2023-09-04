import { useEffect } from "react";
import { useState } from "react";
import { post } from "../../api/api";
//import { useGlobal } from "../../hooks/useGlobal";
import PropTypes from "prop-types";
import FormData from "form-data";
import Axios from "axios"; 

function Card({ id_universidad }) {
  //const { token } = useGlobal();
  const upload = async (e)=>{
        e.preventDefault();
        const file = e.target.files[0]
        const data = new FormData();
        data.append("fileName", file.name);
        data.append("dataFile", file)
        post("/enviarsolicitud", data, {"Content-Type": "multipart/form-data"} )
        /* let formData = new FormData();
        await formData.append("file",file);
        console.log(formData);
        await post("/enviarsolicitud", formData, { "Content-Type": "multipart/form-data", }) */
        /* await Axios({
            url:"/api/enviarsolicitud",
            method: "POST",
            headers: { "Content-Type": "multipart/form-data", },
            data: formData 
        }) */
  }
  const [universidad, setUniversidad] = useState({});
  useEffect(() => {
    (async () => {
      setUniversidad(await post("/get/uni", { id_universidad }));
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
        <a href="#" className="card-link">
          Ver en el mapa
        </a>
        <input
          type="file"
          name="file"
          id="file"
          onChange={upload}

        />
      </div>
    </div>
  );
}
Card.propTypes = {
  id_universidad: PropTypes.number,
};

export default Card;
