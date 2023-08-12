import "../../form.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { post } from "../../../../api/api";
import { useRegistro } from "../../../../context/Registro/useRegistro";

function RectorCode({ className }) {
  const { form, setStep } = useRegistro();
  const [code, setCode] = useState("");
  const [spanCode, setSpanCode] = useState("");

  const handleClick = () => setStep(1);

  const sendMail = async (e) => {
    try {
      e.preventDefault();
      const data = await post("/entrant/first-step", form);
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
      const data = await post("/rector/second-step", {
        ...form,
        code: code,
      });
      if (data.token) {
        setSpanCode("");
        localStorage.setItem("TokenUniNet", data.token);
        setStep(3);
      } else {
        setSpanCode(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  let disabled;
  return (
    <>
      <div className={className + " " + "box"}>
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
RectorCode.propTypes = {
  className: PropTypes.string,
};
export default RectorCode;