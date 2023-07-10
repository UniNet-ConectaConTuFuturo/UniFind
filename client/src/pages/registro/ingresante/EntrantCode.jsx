import "./form.css";
import { useEffect, useState } from "react";
import { get, post } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function EntrantCode() {
  const [code, setCode] = useState(0);
  const [spanCode, setSpanCode] = useState("");
  const [form, setForm] = useState({});
  const navegate = useNavigate();
  useEffect(() => {
    (async function () {
      try {
        const res = await get("/entrant/second-step");
        const json = await res.json();
        console.log(json);
        if (json.nosession) navegate("/registro/ingresante");
        setForm(json);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [navegate]);

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
      if (data.success) {
        setSpanCode("exito");
      } else {
        setSpanCode(data.spanCode);
      }
    } catch (error) {
      console.log(error);
    }
  };
  let disabled;
  return (
    <>
      <button type="button" id="volver">
        VOLVER
      </button>
      <div className="container">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <p>
              <a id="repeat" href="">
                Solicitar nuevo código
              </a>
            </p>
            <div className="inputbox">
              <input
                className="typebox"
                type="number"
                name="code"
                placeholder="000000"
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
      </div>
    </>
  );
}

export default EntrantCode;
