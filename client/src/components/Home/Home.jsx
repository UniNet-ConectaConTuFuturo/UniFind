import "./home.css"

function Home() {
  return (
    <>
    <header className="absolute pl-28 bg-black w-full">
        <nav className="flex items-center gap-4 pl-10">
          <a href="/" className="text-white z-10 p-4 pointer-events-none">
            <img
              className="w-20 h-20 inline-block scale-75"
              src="/images/iconoBlanco.png"
              alt=""
            />
          </a>
          <a href="/promocion" className="text-white z-10 p-4">
            Nosotros
          </a>
          <a href="/contacto" className="text-white z-10 p-4">
            Contacto
          </a>
        </nav>
      </header>
    <div className="home-cont flex flex-col w-full h-screen">


      <div class="w-full h-1/2 relative">
        <img class="w-full h-full object-cover" src="/images/universidad1.png" />
        <div class="gradiente right w-full h-full left-0 top-0 absolute">
          <div class="right-14 top-14 absolute text-white text-[64px] font-normal font-['Inter']">
            Centro de Información
            <a href="/mapa" className="block w-64 text-4xl ml-80">
              <button>Ingresar al mapa</button>
            </a>
          </div>
        </div>
      </div>


      <div class="w-full h-1/2 relative">
        <img class="w-full h-full object-cover" src="/images/examen.png" />
        <div class="gradiente left w-full h-full left-0 top-0 absolute">
          <div class="left-14 top-14 absolute text-white text-[64px] font-normal font-['Inter']">
            Sistema de Admisión
            <a href="#" className="block w-32 text-4xl">
              <button>Ingresar</button>
            </a>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
