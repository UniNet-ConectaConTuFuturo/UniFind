import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Registro from "./components/Registro/Registro";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro/ingresante" element={<Registro />} />
    </Routes>
  );
}

export default App;
