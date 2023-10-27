import "./home.css"
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <header className="fixed pl-28 w-full z-10 bg-gradient-to-b from-black to-transparent  ">
        <nav className="flex items-center gap-4">
          <a href="/" className="text-white z-10 p-4 pointer-events-none text-lg">
            <img
              className="w-20 h-20 inline-block scale-75"
              src="/images/iconoBlanco.png"
              alt=""
            />
            <b> UniNet </b>
          </a>
          <a href="/promocion" className="text-white z-10 p-4 shadow-2xl">
            Nosotros
          </a>
          <a href="/contacto" className="text-white z-10 p-4 shadow-2xl">
            Contacto
          </a>
        </nav>
      </header>
    <div className="home-cont flex flex-col w-full h-screen relative">


    <Link to="/admision" className="h-1/2">
      <div class="w-full h-full relative">
        <img class="w-full h-full object-cover" src="/images/universidad1.png" />
        <div class="gradiente right w-full h-full left-0 top-0 absolute">
          <div class="right-14 top-28 absolute text-white text-[64px] font-normal font-['Inter']">
            Centro de Información
          </div>
        </div>
      </div>
    </Link>


    <Link to="/admision" className="h-1/2">
      <div class="w-full h-full relative">
        <img class="w-full h-full object-cover" src="/images/examen.png" />
        <div class="gradiente left w-full h-full left-0 top-0 absolute">
          <div class="left-14 top-28 absolute text-white text-[64px] font-normal font-['Inter']">
            Sistema de Admisión
          </div>
        </div>
      </div>
      </Link>

    </div>
    </>
  );
}

export default Home;
