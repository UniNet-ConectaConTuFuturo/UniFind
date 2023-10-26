import "./Comunicacion.css";

function Comunicacion() {
  return (
    <main className="bg-teal-700 h-screen py-8">
    <div className="ml-40 mr-4 pr-8 h-full overflow-y-scroll">
      <h1
        style={{ background: "#fff2" }}
        className="text-6xl mb-4 px-2 pb-2 inline-block font-sans"
      >
        Solicitudes de Comunicación
      </h1>
      <br></br>
      <div class="card silhouette">
      
        <div class="card-title"><b><i>Solicitud de Comunicación</i></b></div>
        <div class="info">
            <div class="name"><b>Nombre:</b> Pablo Gambacorta</div>
            <div class="email"><b>Email:</b> email@example.com</div>
            <div class="tel"><b>Teléfono:</b> +54 11 3345-2312</div>
        </div>
        <div class="buttons button-container">
            <button class="button button-green">Aceptar Comunicación</button>
            <button class="button button-red">Rechazar Comunicación</button>
        </div>
        
    </div>
    </div>

    </main>
  )
}

export default Comunicacion