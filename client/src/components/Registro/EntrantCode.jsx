import "./form.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { post } from "../../api/api";

function EntrantCode({ form, setStep }) {
  const [code, setCode] = useState("");
  const [spanCode, setSpanCode] = useState("");

  const handleClick = () => setStep(1);

  const sendMail = async (e) => {
    try {
      e.preventDefault();
      const response = await post("/entrant/first-step", form);
      const data = await response.json();
      if (data.success) {
        setCode("");
        setSpanCode("");
      } else {
        const { err } = data;
        setSpanCode("Error: " + err);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => setCode(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await post("/entrant/second-step", {
        ...form,
        code: code,
      });
      const data = await response.json();
      console.log(data);
      if (data.error) {
        setSpanCode(data.error);
      } else {
        setSpanCode("");
        localStorage.setItem("TokenUniNet", data);
        setStep(3);
      }
    } catch (error) {
      console.log(error);
    }
  };
  let disabled;
  return (
    <>
      <div className="box">
        <button
          className="absolute top-8 left-8"
          type="button"
          id="volver"
          onClick={handleClick}
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
              value={code}
              disabled={disabled}
              onChange={handleChange}
            />
            <span>{spanCode}</span>
            <label htmlFor="">Ingresar Código</label>
          </div>
          <input
            className="boton"
            id="submit"
            type="submit"
            name="boton"
            disabled={disabled}
          />
        </form>
      </div>
    </>
  );
}
EntrantCode.propTypes = {
  form: PropTypes.shape({
    mail_user: PropTypes.string,
    name_user: PropTypes.string,
    password_user: PropTypes.string,
    password2_user: PropTypes.string,
    date_user: PropTypes.string,
    direction_user: PropTypes.string,
    tel_user: PropTypes.string,
    title: PropTypes.string,
  }),
  setStep: PropTypes.func,
};
export default EntrantCode;
