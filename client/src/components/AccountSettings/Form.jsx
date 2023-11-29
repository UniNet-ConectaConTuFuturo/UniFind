import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";
import { useLoaderData } from "react-router-dom";

function Form({ setForm }) {
  const defaultForm = useLoaderData();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((form)=>({ ...form, [name]: value }));
  };
  const dataSource = [];
    dataSource.push({
      key: 1,
      label: "Correo Electrónico",
      input: (
        <input
          type="text"
          maxLength={255}
          className="block w-full bg-transparent outline-none"
          name="mail_user"
          defaultValue={defaultForm.mail_user}
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
          defaultValue={defaultForm.name_user}
          onChange={handleChange}
        />
      ),
    });
    console.log(defaultForm.password_user);
    dataSource.push({
      key: 3,
      label: "Contraseña",
      input: (
        <input
          type="password"
          maxLength={255}
          className="block w-full bg-transparent outline-none"
          name="password_user"
          defaultValue={"        "}
          onChange={handleChange}
          onFocus={(e)=>{if(e.target.value === "        ") e.target.value = ""}}
          onBlur={(e)=>{
            if(!e.target.value) e.target.value = "        "}}

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
          defaultValue={defaultForm.date_user}
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
          defaultValue={defaultForm.direction_user}
          onChange={handleChange}
        />
      ),
    });
    dataSource.push({
      key: 6,
      label: "Número de Teléfono",
      input: (
        <PhoneInput
        country="ar"
        containerClass='outline-none border-none'
        inputClass="block w-full bg-transparent outline-none"
        jumpCursorToEnd={true}
        specialLabel=""
        placeholder=""
        defaultValue={defaultForm.tel_user}
        limitMaxLength={true}
        onChange={(phone) => handleChange({ target: { name: "tel_user", value: phone } })}        
      />
      ),
    });
    if (defaultForm.title)
      dataSource.push({
        key: 7,
        label: "Titulo",
        input: (
          <input
            type="text"
            maxLength={255}
            className="block w-full bg-transparent outline-none"
            name="title"
            defaultValue={defaultForm.title}
            onChange={handleChange}
          />
        ),
      });
  return dataSource;
}
Form.propTypes = {
  setForm: PropTypes.func,
};
export default Form;
