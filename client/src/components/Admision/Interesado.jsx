import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { post } from '../../api/api';


function Interesado({id_usuario, setCartaName, setButtonPopUpExamen, nombreSoli}) {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    (async () => setUsuario(await post("/get/user", { id_usuario })))();
  }, [id_usuario]);
  useEffect(() => {
    console.log(usuario);
  }, [usuario]);
   
  return (
    <div className="card w-full h-full mt-4 border-black border-2">
      <div className="card-body">
        <h5 className='mb-1'>Nombre Completo</h5>
        <h6 className='card-subtitle mb-2 text-muted'>{usuario.name_user}</h6>
      
        <h5 className='mt-4 mb-1'>datos usuario</h5>
        
        <button onClick={()=>{
          setCartaName(nombreSoli)
          setButtonPopUpExamen(true)
        }}></button>
      </div>
    </div>
  )
}
//nombre, titulo, mail, telefono, btn rechazar, btn aceptar, btn/input ver carta / descarga
export default Interesado