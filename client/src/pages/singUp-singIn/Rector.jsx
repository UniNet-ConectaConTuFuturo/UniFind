import Login from "../../components/Identification/Login/Login";
import Registro from "../../components/Identification/Registro/Rector/Registro";
import RegistroProvider from "../../context/Registro/RegistroProvider";
import CheckBox from "../../components/Identification/CheckBox";
import { useIdentification } from "../../hooks/useIdentification";
function Rector() {
  const { bgColor, loginVisible, registroVisible, classLogin, classRegistro } =
    useIdentification();
  return (
    <div
      className={
        "transition-colors duration-700 overflow-hidden" + " " + bgColor
      }
    >
      <CheckBox />
      <section
        role="Formularios"
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

export default Rector;
