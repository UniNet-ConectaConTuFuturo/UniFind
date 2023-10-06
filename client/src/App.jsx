import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* Authentication */
import getAuth from "./api/authentication";
import { Authenticated, IsEntrant, IsRector, NotAuthenticated } from "./middlewares/Authentication";
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
      {
        path: "/listainteres",
        loader: async () => await getAuth(),
        Component: IsEntrant,
        children: [{ index: true, Component: ListaInteres }],
      },
      {
        path: "/admision",
        loader: async () => await getAuth(),
        Component: IsRector,
        children: [{ index: true, Component: Admision }],
      },
      {
        path: "/admision",
        loader: async () => await getAuth(),
        Component: IsRector,
        children: [{ index: true, Component: Admision }],
      },
      {
        path: "/segundainstancia",
        loader: async () => await getAuth(),
        Component: IsRector,
        children: [{ index: true, Component: SegundaInstancia }],
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider future={{ v7_startTransition: true }} router={router} />
  );
}

export default App;
