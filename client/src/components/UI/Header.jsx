import { Link, useMatch } from "react-router-dom";

function Header() {
  const isHome = useMatch("/");
  //const isNosotros = useMatch("/nosotros");
  return (
    <header className="fixed w-full pr-16 z-10 bg-gradient-to-b from-black to-transparent">
      <nav className="flex items-center h-28 justify-end gap-16">
        {!isHome && (
          <Link
            to="/"
            className="group text-white transition duration-300 z-10"
          >
            UniNet
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </Link>
        )}
        <Link
          to="/servicios"
          className="group text-white transition duration-300 z-10"
        >
          Servicios
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
        </Link>
        <Link
          to="/nosotros"
          className="group text-white transition duration-300 z-10"
        >
          Nosotros
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
