import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Registro from "./components/Registro/Registro";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro/ingresante" element={<Registro />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
