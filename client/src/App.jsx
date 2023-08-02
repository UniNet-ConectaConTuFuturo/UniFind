import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Ingresante from "./pages/singUp-singIn/Ingresante";
import Rector from "./pages/singUp-singIn/Rector";
import Mapa from "./components/Mapa/Mapa";
import IngresanteProvider from "./context/Ingresante/IngresanteProvider";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingresante" element={
            <IngresanteProvider>
              <Ingresante />
            </IngresanteProvider>
            } />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
