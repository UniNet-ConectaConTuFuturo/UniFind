function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="h-1/2 w-full pl-28 absolute object-fill">
        <img
          className="w-full h-full absolute"
          src="/images/estudiantes.jpg"
          alt=""
        />
        <h1>Centro de Información</h1>
        <button className="bg-black w-40 h-8">Ingresar</button>
      </div>
      <div className="h-1/2 w-full pl-28 bottom-0 absolute">
        <img
          className="w-full h-full absolute"
          src="/images/examen.png"
          alt=""
        />
        Sistema de Admisión
      </div>
    </div>
  );
}

export default Home;
