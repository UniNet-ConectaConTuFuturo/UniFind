import PropTypes from "prop-types";
/* funcionality */
import { forwardRef, useState } from "react";
import { post } from "../../../api/api";
/* Components */
import SelectUniversidad from "../UI/SelectUniversidad";
import Input from "../UI/Input";
import InputPhone from "../UI/InputPhone";

const DataForm = forwardRef(function DataForm(
  {
    isEntrant,
    form,
    setForm,
    changeStep,
    changeToLogin,
    changeRegistro,
    otroRegistroText,
  },
  ref
) {
  const spanVacio = {
    spanEmail: "",
    spanName: "",
    spanPassword: "",
    spanPassword2: "",
    spanDate: "",
    spanDirection: "",
    spanTel: "",
    spanUniversity: "",
  };
  const [span, setSpan] = useState(spanVacio);
  const who = isEntrant ? "entrant" : "rector";
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleBlur = async () => {
    try {
      const data = await post(`/${who}/validate-registro`, form);
      setSpan({ ...spanVacio, ...data });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await post(`/${who}/first-step`, form);
      if (data.success) {
        changeStep();
      } else {
        setSpan({ ...spanVacio, ...data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      ref={ref}
      className="center transition-position-y-transform duration-700"
      role="DataForm"
    >
      <h2 className="ml-48">Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          Name="mail_user"
          value={form.mail_user}
          span={span.spanEmail}
          label="Correo Electrónico"
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          Name="name_user"
          value={form.name_user}
          span={span.spanName}
          label="Nombre y Apellido"
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          type="password"
          Name="password_user"
          value={form.password_user}
          span={span.spanPassword}
          label="Contraseña"
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          type="password"
          Name="password2_user"
          value={form.password2_user}
          span={span.spanPassword2}
          label="Repetir Contraseña"
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          type="date"
          Name="date_user"
          value={form.date_user}
          span={span.spanDate}
          label="Fecha de Nacimiento"
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          Name="direction_user"
          value={form.direction_user}
          span={span.spanDirection}
          label="Dirección"
        />
        <InputPhone
          handleChange={handleChange}
          handleBlur={handleBlur}
          Name="tel_user"
          value={form.tel_user}
          span={span.spanTel}
          label="Teléfono"
        />
        {isEntrant ? (
          <Input
            handleChange={handleChange}
            handleBlur={handleBlur}
            Name="title"
            value={form.title}
            span={span.spanUniversity}
            label="Título Secundario"
          />
        ) : (
          <SelectUniversidad
            handleChange={handleChange}
            handleBlur={handleBlur}
            id_universidad={form.id_universidad}
            spanUniversity={span.spanUniversity}
          />
        )}

        <input type="submit" />
      </form>
      <a href="#" onClick={changeToLogin}>
        Ya tengo una cuenta
      </a>
      <button onClick={changeRegistro}>{otroRegistroText}</button>
    </div>
  );
});
DataForm.propTypes = {
  isEntrant: PropTypes.bool,
  form: PropTypes.shape({
    mail_user: PropTypes.string,
    name_user: PropTypes.string,
    password_user: PropTypes.string,
    password2_user: PropTypes.string,
    date_user: PropTypes.string,
    direction_user: PropTypes.string,
    tel_user: PropTypes.string,
    title: PropTypes.string,
    id_universidad: PropTypes.number,
  }),
  setForm: PropTypes.func,
  changeStep: PropTypes.func,
  changeToLogin: PropTypes.func,
  changeRegistro: PropTypes.func,
  otroRegistroText: PropTypes.any,
};
export default DataForm;
