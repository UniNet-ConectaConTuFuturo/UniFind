import Header from "../UI/Header";

function Promocion() {
  return (
    <div className="h-screen w-full bg-[url(/images/education.png)] bg-cover">
      <div className="backdrop-brightness-[0.20] h-full w-full">
      <Header/>
      <main className="prom-cont pl-10 pt-14 opacity-95">
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
      </main>
      </div>
    </div>
  );
}

export default Promocion;
