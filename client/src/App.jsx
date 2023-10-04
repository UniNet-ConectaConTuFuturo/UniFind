import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* Authentication */
import getAuth from "./api/authentication";
import { Authenticated, NotAuthenticated } from "./middlewares/Authentication";
/* ContectProvider */
import GlobalProvider from "./context/Global/GlobalProvider";
import IdentificationProvider from "./context/Identification/IdentificationProvider";
/* Componentes */
import { lazy } from "react";
const Home = lazy(() => import("./components/Home/Home"));
const Ingresante = lazy(() =>
  import("./components/Accounts/Identification/Ingresante")
);
const Rector = lazy(() =>
  import("./components/Accounts/Identification/Rector")
);
const AccountSettings = lazy(() =>
  import("./components/Accounts/AccountSettings")
);
const ListaInteres = lazy(() =>
  import("./components/ListaInteres/ListaInteres")
);
const Mapa = lazy(() => import("./components/Mapa/Mapa"));
const ChatIngresante = lazy(() => import("./components/Chat/ChatIngresante"));
const ChatRector = lazy(() => import("./components/Chat/ChatRector"));
const Admision = lazy(() => import("./components/Admision/Admision"));
const SegundaInstancia = lazy(() => import("./components/SegundaInstancia/SegundaInstancia"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: GlobalProvider,
    children: [
      { index: true, Component: Home },
      {
        path: "/identificacion/",
        loader: async () => await getAuth(),
        Component: NotAuthenticated,
        children: [
          {
            path: "ingresante",
            Component: IdentificationProvider,
            children: [{ index: true, Component: Ingresante }],
          },
          {
            path: "rector",
            Component: IdentificationProvider,
            children: [{ index: true, Component: Rector }],
          },
        ],
      },
      {
        path: "/configuracion",
        loader: async () => await getAuth(),
        Component: Authenticated,
        children: [{ index: true, Component: AccountSettings }],
      },
      { path: "/mapa", Component: Mapa },
      { path: "/listainteres", Component: ListaInteres },
      { path: "/admision", Component: Admision },
      { path: "/chat/ingresante", Component: ChatIngresante },
      { path: "/chat/rector", Component: ChatRector },
      { path: "/segundainstancia", Component: SegundaInstancia }, 
    ],
  },
]);
function App() {
  return (
    <RouterProvider future={{ v7_startTransition: true }} router={router} />
  );
}

export default App;
