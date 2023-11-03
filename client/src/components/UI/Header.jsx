import { useMatch } from "react-router-dom"

function Header() {
    const isPromocion = useMatch("/promocion")
    const isHome = useMatch("/home")
    console.log(isPromocion);
    return (
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
                {!isPromocion &&

                    <a href="/promocion" className="text-white z-10 p-4">
                        Nosotros
                    </a>
                }
                {!isHome &&

                    <a href="/home" className="text-white z-10 p-4">
                        Servicios
                    </a>
                }
                <a href="/contacto" className="text-white z-10 p-4">
                    Contacto
                </a>
            </nav>
        </header>
    )
}

export default Header