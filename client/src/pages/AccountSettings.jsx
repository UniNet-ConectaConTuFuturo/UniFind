function AccountSettings() {
  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full">
      <div className="py-6  bg-dark">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7 mx-auto">
              {/* Profile picture */}
              <div className="card shadow border-0 mt-4 mb-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="d-flex align-items-center">
                        <a
                          href="#"
                          className="avatar avatar-lg bg-warning rounded-circle text-white"
                        >
                          <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80?url"
                          />
                        </a>
                        <div className="ms-4">
                          <span className="h4 d-block mb-0">
                            Nombre de Usuario
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-sm btn-neutral"
                        >
                          Subir nueva foto
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* form */}
              <div className="mb-5">
                <h5 className="mb-0 text-success">Información de Contacto</h5>
              </div>
              <form className="mb-6 text-primary">
                <div className="row mb-5">
                  <div className="col-md-6">
                    <div className="">
                      <label className="form-label" htmlFor="first_name">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <label className="form-label" htmlFor="last_name">
                        Apellido
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last_name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-5">
                  <div className="col-md-6">
                    <div className="">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <label className="form-label" htmlFor="phone_number">
                        Número de Teléfono
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone_number"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="">
                      <label className="form-label" htmlFor="address">
                        Dirección
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <label className="form-label" htmlFor="city">
                        Ciudad
                      </label>
                      <input type="text" className="form-control" id="city" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <label className="form-label" htmlFor="country">
                        Zona
                      </label>
                      <select
                        className="form-select"
                        id="country"
                        placeholder="Your email"
                        aria-label="Default select example"
                        defaultValue="0"
                      >
                        <option value="0">Introduzca la zona</option>
                        <option value="1">Capital Federal</option>
                        <option value="2">Zona Norte</option>
                        <option value="3">Zona Oeste</option>
                        <option value="4">Zona Sur</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="">
                      <label className="form-label" htmlFor="zip">
                        ZIP
                      </label>
                      <input type="tel" className="form-control" id="zip" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check"></div>
                  </div>
                </div>
                <div className="text-end">
                  <button type="button" className="btn btn-sm btn-neutral me-2">
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-sm btn-primary">
                    Guardar
                  </button>
                </div>
              </form>
              <hr className="my-10" />
              {/* <!-- Individual switch cards --> */}
              <div className="row g-6"></div>
              <div className="col-md-12">
                <div className="card shadow border-0 bg-warning">
                  <div className="card-body d-flex align-items-center">
                    <div>
                      <h5 className="text-danger mb-2">Desactivar cuenta</h5>
                      <p className="text-sm text-muted">
                        Considera que esto no es cerrar sesión, una vez borrada
                        la cuenta no hay vuelta atrás. Se certero.
                      </p>
                    </div>
                    <div className="ms-auto">
                      <button type="button" className="btn btn-sm btn-danger">
                        Borrar cuenta
                      </button>
                    </div>
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

export default AccountSettings;
