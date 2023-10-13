import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import { get } from "../../../api/api";
import { useGlobal } from "../../../hooks/useGlobal";
import Input from "../UI/Input";

const Login = forwardRef(function Login({ changeToRegistro }, ref) {
  const { setToken } = useGlobal();
  const formNuevo = {
      mail_user: "",
      password_user: "",
    },
    spanVacio = {
      spanEmail: "",
      spanPassword: "",
    };
  const [form, setForm] = useState(formNuevo);
  const [span, setSpan] = useState(spanVacio);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await get("/login/user", form);
      if (data.token) {
        setSpan(spanVacio);
        setToken(data.token);
      } else {
        setSpan({ ...spanVacio, ...data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section
      role="LogIn"
      className="center transition-position-y-transform duration-700"
      ref={ref}
    >
      <h2 className="text-center mb-10">INGRESAR</h2>
      <form onSubmit={handleSubmit}>
        <Input
          Name="mail_user"
          value={form.mail_user}
          span={span.spanEmail}
          handleChange={handleChange}
          label="Correo Electrónico"
        />
        <Input
          type="password"
          Name="password_user"
          value={form.password_user}
          span={span.spanPassword}
          handleChange={handleChange}
          label="Contraseña"
        />
        <input type="submit" />
      </form>
      <a href="#" onClick={changeToRegistro}>
        ¿No estás registrado? Hazlo ahora!
      </a>
    </section>
  );
});
Login.propTypes = {
  changeToRegistro: PropTypes.func,
};
export default Login;
