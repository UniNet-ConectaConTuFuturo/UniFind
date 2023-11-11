import "./servicios.css";
import { Link } from "react-router-dom";

function Servicios() {
  return (
    <>
      <main className="flex flex-col w-full h-screen relative">
        <Link
          to="/mapa"
          className="h-1/2 bg-[url(/images/universidad1.png)] bg-cover"
        >
          <div className="gradiente right w-full h-full">
            <div className="h-full w-full grid items-center p-8 justify-end">
              <span className="text-white text-6xl font-normal font-['Inter']">
                Centro de Información
              </span>
            </div>
          </div>
        </Link>

        <Link
          to="/"
          className="center relative flex justify-center w-full z-10 bg-black border-y-2 border-y-white bg-[url(/images/education.png)] bg-cover"
        >
          <div className="centerbar gradiente contenedor flex justify-center w-full backdrop-brightness-[0.30]">
            <div className="logo text-white z-10 p-4 text-lg">
              <img
                className="w-20 h-20 inline-block scale-75"
                src="/images/iconoBlanco.png"
                alt=""
              />
              <b> UniNet </b>
            </div>
          </div>
        </Link>

        <Link
          to="/admision"
          className="h-1/2 bg-[url(/images/examen.png)] bg-center bg-cover"
        >
          <div className="gradiente left w-full h-full grid items-center p-8">
            <span className="text-white text-6xl font-normal font-['Inter']">
              Sistema de Admisión
            </span>
          </div>
        </Link>
      </main>
    </>
  );
}

export default Servicios;
