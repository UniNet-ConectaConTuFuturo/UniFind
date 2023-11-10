import Header from "../UI/Header";

function Home() {
  return (
    <div className="min-h-[100vh] w-full bg-[url(/images/education.png)] bg-cover">
      <div className="backdrop-brightness-[0.20] min-h-[100vh]">
        <Header />
        <main className="pt-20  opacity-95">
          <section className="flex flex-wrap gap-8 justify-center">
            <div>
              <h1 className="text-9xl font-medium italic text-white">UniNet</h1>
              <h2 className="text-xl pl-4 font-bold italic text-gray-300">
                Conecta con tu futuro
              </h2>
            </div>
            <div className="pt-4">
              <img
                className="brightness-90 w-48 drop-shadow-logo"
                src="/images/logo-color.png"
                /* src="/images/libro.svg" */
                alt=""
              />
            </div>
          </section>
          <section className="py-16 text-gray-400 text-center">
            <p>
              Conocé las instituciones educativas a través de un mapa
              interactivo.
            </p>
            <br />
            <p>
              Investiga las carreras e información importante sobre tu
              universidad ideal.
            </p>
            <br />
            <p>Hazlo eficiente y eficazmente.</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
