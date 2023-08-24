function Card() {
  return (
    <div className="card" >
        <div className="card-body">
            <h5 className="card-title">Universidad Nacional de La Matanza</h5>
            <h6 className="card-subtitle mb-2 text-muted">Universidad de Interés</h6>
            <p className="card-text">Pop-up info</p>
            <br />
            <a href="#" class="card-link">Ver en el mapa</a>
            <a href="#" class="card-link">Enviar solicitud</a>
        </div>
    </div>
  )
}

export default Card