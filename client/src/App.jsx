import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EntrantForm from "./pages/registro/ingresante/EntrantForm";
import EntrantCode from "./pages/registro/ingresante/EntrantCode";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro/ingresante" element={<EntrantForm />} />
      <Route
        path="/registro/ingresante/ingresar-codigo"
        element={<EntrantCode />}
      />
    </Routes>
  );
}

export default App;
