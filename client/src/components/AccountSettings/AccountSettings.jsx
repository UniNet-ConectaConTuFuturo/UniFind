import { useState } from "react";
/* import {post} from "../../api/api" */
function AccountSettings() {
  const formNuevo = {
    Name: "",
    phoneNumber: "",
    address: "",
  };

  const [form, setForm] = useState(formNuevo);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    /* const res = post("/config-account", {form: e.target}) */
  }
  return (
    <div className="flex flex-col h-screen w-full ">
      <div className="py-6  bg-dark">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7 mx-auto">
              <div className="mb-5">
                <h5 className="mb-0 text-success">Información de Contacto</h5>
              </div>
              <form onSubmit={handleSubmit} className="mb-6 text-primary">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <div className="">
                      <label className="form-label" htmlFor="first_name">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        value={form.Name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-5">
                  <div className="col-12">
                    <div className="">
                      <label className="form-label" htmlFor="phone_number">
                        Número de Teléfono
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone_number"
                        value={form.phoneNumber}
                        onChange={handleChange}
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
                        value={form.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check"></div>
                  </div>
                </div>
                <div className="text-end col-12 mx-auto">
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
