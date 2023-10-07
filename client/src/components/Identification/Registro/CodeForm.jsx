import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import { post } from "../../../api/api";
import { useGlobal } from "../../../hooks/useGlobal";

const CodeForm = forwardRef(function CodeForm({ isEntrant, form, next }, ref) {
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

  const handleChange = (e) => setCode(e.target.value);

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
    <div ref={ref} className="box" role="CodeForm">
      <button
        className="absolute top-8 left-8"
        type="button"
        id="volver"
        onClick={() => next(false)}
      >
        VOLVER
      </button>
      <form onSubmit={handleSubmit}>
        <p>
          <a onClick={sendMail} id="repeat" href="">
            Solicitar nuevo código
          </a>
        </p>
        <div className="inputbox">
          <input
            className="typebox"
            type="number"
            name="code"
            id="code"
            value={code}
            onChange={handleChange}
          />
          <span>{spanCode}</span>
          <label htmlFor="code">Ingresar Código</label>
        </div>
        <input className="boton" id="submit" type="submit" name="boton" />
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
  next: PropTypes.func,
};
export default CodeForm;
