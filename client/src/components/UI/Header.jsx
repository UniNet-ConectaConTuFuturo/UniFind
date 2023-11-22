import { Link, useMatch } from "react-router-dom";
import { twMerge } from "tailwind-merge";
function Header() {
  const isHome = useMatch("/");
  const isNosotros = useMatch("/nosotros");
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
          className={twMerge(
            "group transition duration-300 z-10",
            isNosotros ? "text-gray-400 cursor-default" : "text-white"
          )}
        >
          Nosotros
          <span
            className={twMerge(
              "block max-w-0 transition-all duration-500 h-0.5 bg-white",
              isNosotros ? "max-w-full bg-gray-400" : "group-hover:max-w-full"
            )}
          ></span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
