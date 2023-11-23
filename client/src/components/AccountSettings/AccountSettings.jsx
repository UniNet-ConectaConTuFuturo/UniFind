import { useState } from "react";
import { post } from "../../api/api";
import "simplebar";
import "simplebar/dist/simplebar.css";
import { ConfigProvider, List, Table } from "antd";
function AccountSettings() {
  const formNuevo = {
    name_user: "",
    phoneNumber: "",
    address: "",
  };

  const [form, setForm] = useState(formNuevo);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    await post("/config-account", { form });
  }
  return (
    <main className="bg-[url(/images/examen.png)] bg-cover h-screen">
      <div className="backdrop-brightness-[0.10] h-full py-8 text-gray-300">

        <div data-simplebar className="ml-40 mr-4 pr-8 h-full ">
          <h1 className="bg-[#fff2] rounded-md text-6xl mb-4 px-2 pb-2 inline-block font-sans">
            Configuración
          </h1>
          <ConfigProvider theme={{ components: { 
            Table: { 
              colorBgContainer: "#fff2",
              colorBorderSecondary: "#000",
              borderRadiusLG: 1,
              colorText: "rgb(209 213 219)",
              cellPaddingBlock: 24,
              } } }}>

            <Table
              footer={null}
              pagination={false}
              showHeader={false}

              columns={[{
                dataIndex: 'label',
                key: 'label',
                render: false,
                width: "30%"
              },
              {
                dataIndex: 'input',
                key: 'input',
                render: false,
                width: "70%"
              }
              ]}

              dataSource={[
                {
                  key: 1,
                  label: "Correo Electrónico",
                  input: (<input
                    type="text"
                    className="form-control"
                    placeholder="Pepe"
                    id="first_name"
                    name="name_user"
                    value={form.name_user}
                    onChange={handleChange}
                  />)
                },
                {
                  key: 1,
                  label: "Nombre y Apellido",
                  input: (<input
                    type="text"
                    className="form-control"
                    placeholder="Pepe"
                    id="first_name"
                    name="name_user"
                    value={form.name_user}
                    onChange={handleChange}
                  />)
                },
                {
                  key: 1,
                  label: "Contraseña",
                  input: (<input
                    type="text"
                    className="form-control"
                    placeholder="****"
                    id="first_name"
                    name="name_user"
                    value={form.name_user}
                    onChange={handleChange}
                  />)
                },
                {
                  key: 1,
                  label: "Número de Teléfono",
                  input: (<input
                    type="tel"
                    className="form-control"
                    id="phone_number"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                  />)
                },
                {
                  key: 1,
                  label: "Dirección",
                  input: (<input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />)
                },
                {
                  key: 1,
                  label: "Titulo",
                  input: (<input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />)
                },
              ]}
            />
          </ConfigProvider>

            <button type="button" className="btn btn-sm btn-neutral me-2">
              Cancelar
            </button>
            <button type="submit" className="btn btn-sm btn-primary">
              Guardar
            </button>
          <button type="button" className="btn btn-sm btn-danger">
            Borrar cuenta
          </button>
          {/* <p className="text-sm text-muted">
                Considera que esto no es cerrar sesión, una vez borrada
                la cuenta no hay vuelta atrás. Se certero.
              </p> */}
        </div>
      </div>
    </main>
  );
}

export default AccountSettings;
