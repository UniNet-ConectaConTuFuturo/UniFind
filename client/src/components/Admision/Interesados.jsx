import React from 'react'
import { Link } from 'react-router-dom'

function Interesados() {
  return (
    <div className="card w-full h-full mt-4 border-black border-2">
      <div className="card-body">
        <h5 className='mb-1'>Nombre Completo</h5>
        {/* Nombre Ingresante */} <h6 className='card-subtitle mb-2 text-muted'>Juan</h6>
      
        <h5 className='mt-4 mb-1'><Link>Información Sobre Mí</Link></h5>
      
        <h5 className='mt-4 mb-1'><Link>Responder Solicitud</Link></h5>
      </div>
    </div>
  )
}

export default Interesados