import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* Authentication */
import getAuth from "./api/authentication";
import { Authenticated, NotAuthenticated } from "./middlewares/authentication";
/* ContectProvider */
import GlobalProvider from "./context/Global/GlobalProvider";
import IdentificationProvider from "./context/Identification/IdentificationProvider";
/* Componentes */
import Home from "./components/Home/Home";
import Ingresante from "./components/Accounts/Identification/Ingresante";
import Rector from "./components/Accounts/Identification/Rector";
import AccountSettings from "./components/Accounts/AccountSettings";
import ListaInteres from "./components/ListaInteres/ListaInteres";
import Mapa from "./components/Mapa/Mapa";
import ChatIngresante from "./components/Chat/ChatIngresante";
import ChatRector from "./components/Chat/ChatRector";
import Admision from "./components/Admision/Admision";

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
