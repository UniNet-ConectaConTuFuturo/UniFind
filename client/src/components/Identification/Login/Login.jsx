import { useState } from "react";
import "../form.css";
import { post } from "../../../api/api";
import PropTypes from "prop-types";

function Login({ className }) {
  const formNuevo = {
    mail_user: "",
    password_user: "",
  };
  const [form, setForm] = useState(formNuevo);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const spanVacio = {
    spanEmail: "",
    spanPassword: "",
  };
  const [span, setSpan] = useState(spanVacio);
  /* const handleBlur = async () => {
    try {
      const data = await post("/validate-registro", form);
      setSpan({ ...spanVacio, ...data }); 
    } catch (error) {
      console.log(error);
    }
  }; */

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await post("/login/user", form);
      if (data.token) {
        setSpan(spanVacio);
        localStorage.setItem("TokenUniNet", data.token);
      } else {
        setSpan({ ...spanVacio, ...data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={className + " " + "box"}>
      <form onSubmit={handleSubmit}>
        <div className="ml-96 mb-20">
          <h2>INGRESAR</h2>
        </div>
        <div className="inputbox ml-40 mb-20">
          <input
            className="typebox"
            type="text"
            name="mail_user"
            id="mail_user"
            placeholder=" "
            value={form.mail_user}
            onChange={handleChange}
            /* onBlur={handleBlur} */
          />
          <span>{span.spanEmail}</span>
          <label htmlFor="correo">Correo</label>
        </div>
        <div className="inputbox mb-20">
          <input
            className="typebox"
            type="      "
            name="password_user"
            id="password_user"
            placeholder=" "
            value={form.password_user}
            onChange={handleChange}
            /* onBlur={handleBlur} */
          />
          <span>{span.spanPassword}</span>
          <label htmlFor="contrasena">Contraseña</label>
        </div>
        <input className="boton -ml-40 hover:bg-white" type="submit" name="boton" id="boton" />
      </form>
    </div>
  );
}
Login.propTypes = {
  className: PropTypes.string,
};
export default Login;
