function Promocion() {
  return (
    <div className="home bg-black h-screen w-full">
      <img
        className="background w-full h-screen absolute object-cover opacity-20"
        src="/images/education.png"
      />
      <header className="absolute pl-28">
        <nav className="flex items-center gap-4 pl-10">
          <a href="/" className="text-white z-10 p-4 pointer-events-none">
            <img
              className="w-20 h-20 inline-block scale-75"
              src="/images/iconoBlanco.png"
              alt=""
            />
          </a>
          <a href="/home" className="text-white z-10 p-4">
            Servicios
          </a>
          <a href="/contacto" className="text-white z-10 p-4">
            Contacto
          </a>
        </nav>
      </header>
      <div className="prom-cont pl-10 pt-14 opacity-95">
        <div className="title pl-10 pt-20 ">
          <h2 className="text-xl pl-4 text-gray-300">
            <b>Conecta con tu futuro</b>
          </h2>
          <h1 className="text-9xl text-white">
            <i>UniNet</i>
          </h1>
          <p className="pt-8 pl-4 max-w-xl text-gray-400">
            Uninet es proporcionar información detallada sobre las instituciones
            educativas a través de un mapa interactivo para que así los usuarios
            que vayan a buscar las universidades puedan puedan orientarse de
            manera intuitiva sobre la ubicación de cada una de las
            instituciones.
          </p>
          <div className="float-right w-1/2 -mt-32">
            <img className="" src="/images/libro.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promocion;
