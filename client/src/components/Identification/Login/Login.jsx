import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import { get } from "../../../api/api";
import Input from "../UI/Input";
import { useOutletContext } from "react-router-dom";

const Login = forwardRef(function Login({ changeToRegistro }, ref) {
  const { setToken } = useOutletContext();
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
      <div className="form-box w-[26rem] h-[24rem] bg-none border-2 rounded-lg flex flex-col justify-center items-center backdrop-blur-sm gap-4">
      <h2 className="text-center text-white text-2xl">INGRESAR</h2>
      <form onSubmit={handleSubmit}>
        <Input
          className=""
          Name="mail_user"
          value={form.mail_user}
          span={span.spanEmail}
          handleChange={handleChange}
          label="Correo Electrónico"
        />
        <Input
          className="pb-20"
          type="password"
          Name="password_user"
          value={form.password_user}
          span={span.spanPassword}
          handleChange={handleChange}
          label="Contraseña"
        />
        <input className="text-black w-full bg-white h-10 rounded-xl mt-10" type="submit" />
      </form>
      <a className="text-white text-end" href="#" onClick={changeToRegistro}>
        ¿No estás registrado? Hazlo ahora!
      </a>
      </div>
    </section>
  );
});
Login.propTypes = {
  changeToRegistro: PropTypes.func,
};
export default Login;
