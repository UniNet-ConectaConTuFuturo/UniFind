import { useState, useEffect } from "react";
import '../Registro/form.css'

  const handleBlur = async () => {
    try {
      const response = await post("/validate-registro", form);
      const data = await response.json();
      setSpan({ ...spanVacio, ...data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await post("/entrant/first-step", form);
      const data = await response.json();
      if (data.success) {
        console.log("Etapa 2");
        setStep(2);
      } else {
        setSpan({ ...spanVacio, ...data });
      }
    } catch (error) {
      console.log(error);
    }
  };

function Login() {
    return(
        <div className="box">
            <form>
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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
                />
                <span>{span.spanPassword}</span>
                <label htmlFor="contrasena">Contraseña</label>
                </div>
            </form>
        </div>
    )
}

export default Login()