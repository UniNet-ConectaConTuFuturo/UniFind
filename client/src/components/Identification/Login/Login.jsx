import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import { post } from "../../../api/api";
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
      const data = await post("/login/user", form);
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
      className="items-center box transition-all duration-700"
      ref={ref}
    >
      <h2 className="text-center mb-10">INGRESAR</h2>
      <form onSubmit={handleSubmit}>
        <Input
          name="mail_user"
          value={form.mail_user}
          span={span.spanEmail}
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="password_user"
          value={form.password_user}
          span={span.spanPassword}
          handleChange={handleChange}
        />
        <input className="boton ml-32" type="submit" name="boton" id="boton" />
      </form>
      <br />
      <p className="ml-36 max-w-xs">
        <a href="#" onClick={changeToRegistro}>
          ¿No estás registrado? Hazlo ahora!
        </a>
      </p>
    </section>
  );
});
Login.propTypes = {
  changeToRegistro: PropTypes.func,
};
export default Login;
