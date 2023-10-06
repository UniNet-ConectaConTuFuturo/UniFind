import Login from "./Login/Login";
import Registro from "./Registro/RegistroRector";
import RegistroProvider from "../../../context/Registro/RegistroProvider";
import { useIdentification } from "../../../hooks/useIdentification";
function Rector() {
  const { bgColor, loginVisible, registroVisible, classLogin, classRegistro } =
    useIdentification();
  return (
    <div
      className={
        "transition-colors duration-700 overflow-hidden" + " " + bgColor
      }
      
    >

<div className="home">
      <video className="w-full h-screen absolute object-cover left-0 opacity-50" autoPlay muted loop src="../../../public/images/unlam.mp4" type="video/mp4" />
      <section
        role="Formularios"
        className={
          " h-screen relative right-0 overflow-x-visible"
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
    </div>
  );
}

export default Rector;
