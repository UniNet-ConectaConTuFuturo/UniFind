import { Link, useMatch } from "react-router-dom";

function Header() {
  const isHome = useMatch("/");
  return (
    <header className="fixed w-full pr-16 z-10 bg-gradient-to-b from-black to-transparent">
      <nav className="flex items-center h-28 justify-end gap-16">
        {!isHome && (
          <Link to="/" className="grid items-center grid-flow-col">
            <span className="-ml-2 text-white underline underline-offset-2 z-10">
              Inicio
            </span>
          </Link>
        )}
        <a
          href="/servicios"
          className="text-white underline underline-offset-2 z-10"
        >
          Servicios
        </a>
        <a
          href="/nosotros"
          className="text-white underline underline-offset-2 z-10"
        >
          Nosotros
        </a>
      </nav>
    </header>
  );
}

export default Header;
