import PropTypes from "prop-types";
/* funcionality */
import { forwardRef, useState } from "react";
import { post } from "../../../api/api";
/* Components */
import SelectUniversidad from "../UI/SelectUniversidad";
import Input from "../UI/Input";

const DataForm = forwardRef(function DataForm(
  {
    isEntrant,
    form,
    setForm,
    next,
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
        next(true);
      } else {
        setSpan({ ...spanVacio, ...data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div ref={ref} className="box" role="DataForm">
      <h2 className="ml-48">Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          name="mail_user"
          value={form.mail_user}
          span={span.spanEmail}
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          name="name_user"
          value={form.name_user}
          span={span.spanName}
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          type="password"
          name="password_user"
          value={form.password_user}
          span={span.spanPassword}
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          type="password"
          name="password2_user"
          value={form.password2_user}
          span={span.spanPassword2}
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          type="date"
          name="date_user"
          value={form.date_user}
          span={span.spanDate}
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          name="direction_user"
          value={form.direction_user}
          span={span.spanDirection}
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          name="direction_user"
          value={form.direction_user}
          span={span.spanDirection}
        />
        <Input
          handleChange={handleChange}
          handleBlur={handleBlur}
          type="tel"
          name="tel_user"
          value={form.tel_user}
          span={span.spanTel}
        />
        {isEntrant ? (
          <Input
            handleChange={handleChange}
            handleBlur={handleBlur}
            name="title"
            value={form.title}
            span={span.spanUniversity}
          />
        ) : (
          <SelectUniversidad
            handleChange={handleChange}
            handleBlur={handleBlur}
            id_universidad={form.id_universidad}
            spanUniversity={span.spanUniversity}
          />
        )}

        <input className="boton -ml-24" type="submit" name="boton" id="boton" />
      </form>
      <p className="-ml-20 max-w-xs">
        <a href="#" onClick={changeToLogin}>
          Ya tengo una cuenta
        </a>
      </p>
      <br />
      <button onClick={() => changeRegistro(ref)}>{otroRegistroText}</button>
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
  next: PropTypes.func,
  changeToLogin: PropTypes.func,
  changeRegistro: PropTypes.func,
  otroRegistroText: PropTypes.any,
};
export default DataForm;
