import { useState } from "react";
import Login from "../../components/Identification/Login/Login";
import Registro from "../../components/Identification/Registro/Registro";
function Ingresante() {
  const [bgColor, setBgColor] = useState("bg-sky-600");
  const [loginVisible, setLoginVisible] = useState(true);
  const [registroVisible, setRegistroVisible] = useState(false);
  const [classLogin, setClassLogin] = useState("");
  const [classRegistro, setClassRegistro] = useState(
    "translate-x-1/2 opacity-0"
  );
  const handleChange = ({ target }) => {
    if (target.checked) {
      setBgColor("bg-sky-700");
      setClassRegistro("translate-x-1/2 opacity-0 ");
      setTimeout(() => {
        setRegistroVisible(false);
        setLoginVisible(true);
        setTimeout(() => setClassLogin(""), "100");
      }, "700");
    } else {
      setBgColor("");
      setClassLogin("-translate-x-1/2 opacity-0 ");
      setTimeout(() => {
        setLoginVisible(false);
        setRegistroVisible(true);
        setTimeout(() => setClassRegistro(""), "100");
      }, "700");
    }
  };
  return (
    <>
      <section
        className={
          bgColor +
          " h-screen flex justify-end pr-4 items-center transition duration-1000"
        }
      >
        {loginVisible && (
          <div className={classLogin + " transition duration-700"}>
            <Login />
          </div>
        )}
        {registroVisible && (
          <div className={classRegistro + " transition duration-700"}>
            <Registro />
          </div>
        )}
      </section>
      <input
        type="checkbox"
        role="switch"
        defaultChecked
        className="block m-auto rounded-xl "
        onChange={handleChange}
      />
    </>
  );
}

export default Ingresante;
