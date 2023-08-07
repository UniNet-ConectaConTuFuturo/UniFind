import { RouterProvider, createBrowserRouter } from "react-router-dom";
import getAuth from "./api/authentication";
import { NotAuthenticated } from "./middlewares/authentication";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Ingresante from "./pages/singUp-singIn/Ingresante";
import IngresanteProvider from "./context/Ingresante/IngresanteProvider";
/* import Rector from "./pages/singUp-singIn/Rector"; */
import Mapa from "./components/Mapa/Mapa";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: "/identification/",
        loader: async () => await getAuth(),
        Component: NotAuthenticated,
        children: [
          {
            path: "ingresante",
            Component: IngresanteProvider,
            children: [{ index: true, Component: Ingresante }],
          }
      /*    { path: "rector", Component: Rector }, */
        ],
      },
      { path: "/mapa", Component: Mapa },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
