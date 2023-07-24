import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Registro from "./components/Registro/Registro";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Ingresante from "./pages/singUp-singIn/Ingresante";
import Mapa from "./components/Mapa/Mapa";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro/ingresante" element={<Registro />} />
          <Route path="/ingresante" element={<Ingresante />} />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
