import { useEffect } from "react";
import { get } from "../../api/api";
import PropTypes from "prop-types";
function Form({ setForm, form }) {
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  useEffect(() => {
    (async () => setForm(await get("/get/user")))();
  }, [setForm]);
  const dataSource = [];
  if (form) {
    dataSource.push({
      key: 1,
      label: "Correo Electrónico",
      input: (
        <input
          type="text"
          maxLength={255}
          className="block w-full bg-transparent outline-none"
          name="mail_user"
          value={form.mail_user}
          onChange={handleChange}
        />
      ),
    });
    dataSource.push({
      key: 2,
      label: "Nombre y Apellido",
      input: (
        <input
          type="text"
          maxLength={255}
          className="block w-full bg-transparent outline-none"
          name="name_user"
          value={form.name_user}
          onChange={handleChange}
        />
      ),
    });
    dataSource.push({
      key: 3,
      label: "Contraseña",
      input: (
        <input
          type="text"
          maxLength={255}
          className="block w-full bg-transparent outline-none"
          placeholder="****"
          name="password_user"
          value={form.password_user}
          onChange={handleChange}
        />
      ),
    });
    dataSource.push({
      key: 4,
      label: "Fecha de nacimiento",
      input: (
        <input
          type="date"
          maxLength={255}
          className="block w-full bg-transparent outline-none cursor-text"
          name="date_user"
          value={form.date_user}
          onChange={handleChange}
        />
      ),
    });
    dataSource.push({
      key: 5,
      label: "Dirección",
      input: (
        <input
          type="text"
          maxLength={255}
          className="block w-full bg-transparent outline-none"
          name="direction_user"
          value={form.direction_user}
          onChange={handleChange}
        />
      ),
    });
    dataSource.push({
      key: 6,
      label: "Número de Teléfono",
      input: (
        <input
          type="tel"
          maxLength={255}
          className="block w-full bg-transparent outline-none"
          name="tel_user"
          value={form.tel_user}
          onChange={handleChange}
        />
      ),
    });
    console.log(form);
    if (form.title)
      dataSource.push({
        key: 7,
        label: "Titulo",
        input: (
          <input
            type="text"
            maxLength={255}
            className="block w-full bg-transparent outline-none"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        ),
      });
  }
  return dataSource;
}
Form.propTypes = {
  setForm: PropTypes.func,
  form: PropTypes.any,
};
export default Form;
