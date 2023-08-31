import Login from "./Login/Login";
import Registro from "./Registro/RegistroIngresante";
import RegistroProvider from "../../../context/Registro/RegistroProvider";
import { useIdentification } from "../../../hooks/useIdentification";
function Ingresante() {
  const { bgColor, loginVisible, registroVisible, classLogin, classRegistro } =
    useIdentification();
  return (
    <div
      className={
        "transition-colors duration-700 overflow-hidden" + " " + bgColor
      }
    >
      <section
        className={
          " h-screen flex relative left-1/2 right-0 items-center overflow-x-visible"
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
