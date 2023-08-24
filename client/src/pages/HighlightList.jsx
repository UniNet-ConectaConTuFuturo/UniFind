import "./HighlightList.css";
function HighlightList() {
  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full">
      <div className="py-6 mx-auto">
      <h1 class="display-1 mb-5"><a className="fancy-link">Lista de Interés</a></h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm align-items-stretch h-100">
              <div className="mx-auto">
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title">Universidad Nacional de La Matanza</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Universidad de Interés</h6>
                    <p className="card-text">Pop-up info</p>
                    <br></br>
                    <a href="#" class="card-link">Ver en el mapa</a>
                    <a href="#" class="card-link">Enviar solicitud</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm align-items-stretch h-100">
              <div className="mx-auto">
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title">Universidad Nacional de San Martín</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Universidad de Interés</h6>
                    <p className="card-text">Pop-up info</p>
                    <br></br>
                    <a href="#" class="card-link">Ver en el mapa</a>
                    <a href="#" class="card-link">Enviar solicitud</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm align-items-stretch h-100">
              <div className="mx-auto">
                <div class="card" >
                  <div class="card-body">
                    <h5 class="card-title">Universidad de Belgrano</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Universidad de Interés</h6>
                    <p class="card-text">Pop-up info</p>
                    <br></br>
                    <a href="#" class="card-link">Ver en el mapa</a>
                    <a href="#" class="card-link">Enviar solicitud</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightList;
