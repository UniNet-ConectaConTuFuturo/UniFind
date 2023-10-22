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
const Layout = lazy(() => import("./components/Layout/Layout"));
const Promocion = lazy(() => import("./components/Promocion/Promocion"));
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

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/promocion"),
  },
  {
    path: "/promocion",
    Component: Promocion,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "",
    Component: Layout,
    loader: () => get("/auth", { token: localStorage.getItem("TokenUniNet") }),
    children: [
      {
        path: "/identificacion",
        loader: async () => ((await is.notAuth()) ? null : redirect("/home")),
        Component: Identification,
      },
      {
        path: "/configuracion",
        loader: async () => ((await is.auth()) ? null : redirect("/home")),
        Component: AccountSettings,
      },
      { path: "/mapa/:xyz?", Component: Mapa },
      {
        path: "/listainteres",
        loader: async () =>
          (await is.entrant())
            ? get("/getfavorites", {
                token: localStorage.getItem("TokenUniNet"),
              })
            : redirect("/home"),
        Component: ListaInteres,
      },
      {
        path: "/admision",
        loader: async () =>
          (await is.rector())
            ? get("/get/soli", {
                token: localStorage.getItem("TokenUniNet"),
              })
            : redirect("/home"),
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
