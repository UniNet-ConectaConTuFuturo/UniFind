import { RouterProvider, createBrowserRouter } from "react-router-dom";
import getAuth from "./api/authentication";
import { NotAuthenticated } from "./middlewares/authentication";
import Home from "./pages/Home";
import Ingresante from "./pages/singUp-singIn/Ingresante";
import IdentificationProvider from "./context/Identification/IdentificationProvider";
import Rector from "./pages/singUp-singIn/Rector";
import Mapa from "./components/Mapa/Mapa";
import AccountSettings from "./pages/AccountSettings";
import HighlightList from "./pages/HighlightList";
import GlobalProvider from "./context/Global/GlobalProvider";

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
      { path: "/configuracion", Component: AccountSettings },
      { path: "/mapa", Component: Mapa },
      { path: "/listainteres", Component: HighlightList },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
