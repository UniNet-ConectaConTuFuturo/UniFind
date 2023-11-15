import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
/* Authentication */
import * as is from "./middlewares/authentication";
/* Componentes */
import { lazy } from "react";
import { get } from "./api/api";
import Nosotros from "./components/Nosotros/Nosotros";
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./components/Home/Home"));
const Servicios = lazy(() => import("./components/Servicios/Servicios"));
const Identification = lazy(() =>
  import("./components/Identification/Identification")
);
const AccountSettings = lazy(() =>
  import("./components/AccountSettings/AccountSettings")
);
const ListaInteres = lazy(() =>
  import("./components/ListaInteres/ListaInteres")
);
const Comunicacion = lazy(() =>
  import("./components/Comunicacion/Comunicacion")
);
const Mapa = lazy(() => import("./components/Mapa/Mapa"));
const Admision = lazy(() => import("./components/Admision/Admision"));
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/nosotros",
    Component: Nosotros,
  },
  {
    path: "/servicios",
    Component: Servicios,
  },
  {
    path: "",
    Component: Layout,
    loader: () =>get("/auth"),
    children: [
      {
        path: "/identificacion",
        loader: async () => ((await is.notAuth()) ? null : redirect("/")),
        Component: Identification,
      },
      {
        path: "/comunicacion",
        loader: async () =>
          (await is.rector())
            ? get("/estadoticketrector", {
                token: localStorage.getItem("TokenUniNet"),
              })
            : redirect("/"),
        Component: Comunicacion,
      },
      {
        path: "/configuracion",
        loader: async () => ((await is.auth()) ? null : redirect("/")),
        Component: AccountSettings,
      },
      { path: "/mapa/:xyz?", Component: Mapa },
      {
        path: "/listainteres",
        loader: async () =>
          (await is.entrant())
            ? get("/getfavorites")
            : redirect("/identificacion"),
        Component: ListaInteres,
      },
      {
        path: "/admision",
        loader: async () =>
          (await is.rector())
            ? get("/get/soli")
            : redirect("/listainteres"),
        Component: Admision,
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
