import { useEffect } from "react";
import { useState } from "react";
import { post } from "../../api/api";
import PropTypes from "prop-types";

function Card({id_universidad}) {
    const [universidad, setUniversidad] = useState({});
    useEffect(() => {
        (async () => {
        setUniversidad(await post("/get/uni", { id_universidad }));
        })();
    }, [id_universidad]);
  return (
    <div className="card w-full h-full" >
        <div className="card-body">
            <h5 className="card-title">{universidad.nombre_universidad}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Universidad de Interés</h6>
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
            <a href="#" className="card-link">Ver en el mapa</a>
            <a href="#" className="card-link">Enviar solicitud</a>
        </div>
    </div>
  )
}
Card.propTypes = {
    id_universidad: PropTypes.number,
  };

export default Card