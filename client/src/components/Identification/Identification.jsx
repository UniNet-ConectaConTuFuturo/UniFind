import "./form.css";
import "./Registro/registro.css";

import { useRef } from "react";
import Login from "./Login/Login";
import Registro from "./Registro/Registro";
function Identification() {
  const mainRef = useRef(null);
  const loginRef = useRef(null);
  const entrantRef = useRef(null);
  const rectorRef = useRef(null);
  const registroRef = useRef(entrantRef);
  function change() {
    console.log("cambiando");
  }
  function changeRegistro(prev) {
    prev === entrantRef
      ? (registroRef.current = rectorRef.current)
      : (registroRef.current = entrantRef.current);
    console.log(registroRef.current);
  }
  return (
    <main
      ref={mainRef}
      className={"transition-colors duration-700 overflow-hidden h-screen"}
    >
      <video
        className="w-full h-screen absolute object-cover left-0 opacity-50"
        autoPlay
        muted
        loop
        src="/images/unlam.mp4"
        type="video/mp4"
      />
      <Login ref={loginRef} changeToRegistro={change} />
      <Registro
        ref={entrantRef}
        changeToLogin={change}
        changeRegistro={changeRegistro}
        otroRegistroText="Soy RECTOR"
        isEntrant={true}
      />
      <Registro
        ref={rectorRef}
        changeToLogin={change}
        changeRegistro={changeRegistro}
        otroRegistroText="Soy INGRESANTE"
        isEntrant={false}
      />
    </main>
  );
}

export default Identification;
