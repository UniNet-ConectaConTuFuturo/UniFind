import { useState } from "react";
import "../form.css";
import { post } from "../../../api/api";
import PropTypes from "prop-types";
import { useIdentification } from "../../../context/Identification/useIdentification";

function Login({ className }) {
  const { checkboxRef, handleCheckboxChange } = useIdentification();
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
    <>
      <div className="h-screen w-screen absolute bg-no-repeat opacity-50 bg-[url('/images/graduation.png')]"></div>
      <div className={className + " " + "box"}>
        <form onSubmit={handleSubmit}>
          <div className="ml-96 mb-10">
            <h2>INGRESAR</h2>
          </div>
          <div className="inputbox ml-40">
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
          <div className="inputbox ml-32">
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
          <input
            className="boton ml-32 hover:bg-white"
            type="submit"
            name="boton"
            id="boton"
          />
          <br />
          <p className="ml-36 max-w-xs">
            <a
              href="#"
              onClick={() => {
                checkboxRef.current.checked = !checkboxRef.current.checked;
                handleCheckboxChange();
              }}
            >
              Ya tengo una cuenta
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
Login.propTypes = {
  className: PropTypes.string,
};
export default Login;
