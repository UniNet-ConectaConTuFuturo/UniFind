function SendTicket() {
    return (
        <div className="card silhouette">
        
          <div className="card-title"><b><i>Solicitud de Comunicación</i></b></div>
          <div className="info">
              <div className="name"><b>Nombre:</b> Pablo Gambacorta</div>
              <div className="email"><b>Email:</b> email@example.com</div>
              <div className="tel"><b>Teléfono:</b> +54 11 3345-2312</div>
          </div>
          <div className="buttons button-container">
              <button className="button button-green">Aceptar Comunicación</button>
              <button className="button button-red">Rechazar Comunicación</button>
          </div>
          
      </div>
    )
};

export default SendTicket;