import { useState } from "react";
import "../Registro/form.css";

function Login() {
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
      const response = await post("/validate-registro", form);
      const data = await response.json();
      setSpan({ ...spanVacio, ...data }); 
    } catch (error) {
      console.log(error);
    }
  }; */

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      /* const response = await post("/login/user", form);
      const data = await response.json();
      if (data.token) {
        setSpan("");
        localStorage.setItem("TokenUniNet", data.token);
      } else {
        setSpan({ ...spanVacio, ...data });
      } */
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <h2>Ingresar</h2>
        <div className="inputbox">
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
        <div className="inputbox">
          <input
            className="typebox"
            type="password"
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
        <input className="boton" type="submit" name="boton" id="boton" />
      </form>
    </div>
  );
}

export default Login;
