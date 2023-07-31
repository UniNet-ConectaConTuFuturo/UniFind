import { useState } from "react";
import Login from "../../components/Identification/Login/Login";
import Registro from "../../components/Identification/Registro/Registro";
import RegistroProvider from "../../context/Registro/RegistroProvider";
import CheckBox from "../../components/Identification/CheckBox";
function Ingresante() {
  const [bgColor, setBgColor] = useState("bg-sky-600");
  const [loginVisible, setLoginVisible] = useState(true);
  const [registroVisible, setRegistroVisible] = useState(false);
  const [classLogin, setClassLogin] = useState("");
  const [classRegistro, setClassRegistro] = useState(
    "translate-x-1/2 opacity-0"
  );
  return (
    <div
      className={
        "transition-colors duration-700 overflow-hidden" + " " + bgColor
      }
    >
      <CheckBox
        value={{
          setBgColor,
          setLoginVisible,
          setRegistroVisible,
          setClassLogin,
          setClassRegistro,
        }}
      />
      <section
        className={
          " h-screen flex relative left-1/2 right-4 items-center overflow-x-visible"
        }
      >
        {loginVisible && (
          <Login className={classLogin + " " + "transition-all duration-700"} />
        )}
        {registroVisible && (
          <RegistroProvider>
            <Registro
              className={classRegistro + " " + "transition-all duration-700"}
            />
          </RegistroProvider>
        )}
      </section>
    </div>
  );
}

export default Ingresante;
