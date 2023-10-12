import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* Authentication */
import getAuth from "./api/authentication";
import {
  Authenticated,
  IsEntrant,
  IsRector,
  NotAuthenticated,
} from "./middlewares/Authentication";
/* ContectProvider */
import GlobalProvider from "./context/Global/GlobalProvider";
/* Componentes */
import { lazy } from "react";
const Home = lazy(() => import("./components/Home/Home"));
const Identification = lazy(() =>
  import("./components/Identification/Identification")
);
const AccountSettings = lazy(() =>
  import("./components/AccountSettings/AccountSettings")
);
const ListaInteres = lazy(() =>
  import("./components/ListaInteres/ListaInteres")
);
const Mapa = lazy(() => import("./components/Mapa/Mapa"));
const Admision = lazy(() => import("./components/Admision/Admision"));
const SegundaInstancia = lazy(() =>
  import("./components/SegundaInstancia/SegundaInstancia")
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: GlobalProvider,
    children: [
      { index: true, Component: Home },
      {
        path: "/identificacion",
        loader: async () => await getAuth(),
        Component: NotAuthenticated,
        children: [{ index: true, Component: Identification }],
      },
      {
        path: "/configuracion",
        loader: async () => await getAuth(),
        Component: Authenticated,
        children: [{ index: true, Component: AccountSettings }],
      },
      { path: "/mapa/:xyz?", Component: Mapa },
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
