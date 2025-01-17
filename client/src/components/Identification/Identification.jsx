import "./form.css";
import "./transition.css";

import { useRef, useState, useTransition } from "react";
import Login from "./Login/Login";
import Registro from "./Registro/Registro";
import LoginImage from "./UI/LoginImage";
function Identification() {
  const [, startTransition] = useTransition();
  const mainRef = useRef(null);
  const loginRef = useRef(null);
  const registroRef = useRef(null);
  const [isEntrant, setIsEntrant] = useState(true);
  function change() {
    loginRef.current.classList.toggle("nearby-left");
    registroRef.current.classList.toggle("nearby-right");
  }
  function changeRegistro() {
    startTransition(() => {
      setIsEntrant(!isEntrant);
    });
  }
  return (
    <main
      ref={mainRef}
      className={
        "transition-colors duration-700 overflow-hidden h-screen w-screen"
      }
    >
      <div className="structure grid grid-cols-[repeat(2, 50%)] h-screen bg-opacity-10">
        <img className="absolute object-cover h-screen w-full -z-50 bg-opacity-10 translate-x-52" src="/images/uba.png" alt="" />
        <LoginImage />
      </div>

      {/* <img
        className="w-full h-screen absolute object-cover left-0"
        src="/images/loginPerson.png" alt="" />
      <video
        className="w-full h-screen absolute object-cover left-0 opacity-50"
        autoPlay
        muted
        loop
        src="/images/unlam.mp4"
        type="video/mp4"
      /> */}
      <Login ref={loginRef} changeToRegistro={change} />
      <Registro
        ref={registroRef}
        changeToLogin={change}
        changeRegistro={changeRegistro}
        otroRegistroText={isEntrant ? "Soy RECTOR" : "Soy INGRESANTE"}
        isEntrant={isEntrant}
      />
    </main>
  );
}

export default Identification;
