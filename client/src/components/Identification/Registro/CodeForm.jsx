import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import { post } from "../../../api/api";
import { useGlobal } from "../../../hooks/useGlobal";
import Input from "../UI/Input";

const CodeForm = forwardRef(function CodeForm(
  { isEntrant, form, changeStep },
  ref
) {
  const { setToken } = useGlobal();
  const [code, setCode] = useState("");
  const [spanCode, setSpanCode] = useState("");
  const who = isEntrant ? "entrant" : "rector";
  const sendMail = async (e) => {
    try {
      e.preventDefault();
      const data = await post(`/${who}/first-step`, form);
      if (data.success) {
        setCode("");
        setSpanCode("");
      } else {
        setSpanCode("Error: " + Object.values(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await post(`/${who}/second-step`, {
        ...form,
        code: code,
      });
      if (data.token) {
        setSpanCode("");
        setToken(data.token);
      } else {
        setSpanCode(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      ref={ref}
      className="center transition-position-y-transform duration-700 nearby-right"
      role="CodeForm"
    >
      <button
        className="absolute top-8 left-8"
        type="button"
        id="volver"
        onClick={changeStep}
      >
        VOLVER
      </button>
      <a onClick={sendMail} id="repeat" href="">
        Solicitar nuevo código
      </a>
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={(e) => setCode(e.target.value)}
          type="number"
          Name="code"
          value={code}
          span={spanCode}
          label="Ingresar Código"
        />
        <input type="submit" />
      </form>
    </div>
  );
});
CodeForm.propTypes = {
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
  changeStep: PropTypes.func,
};
export default CodeForm;
