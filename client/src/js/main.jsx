import { createRoot } from "react-dom/client";
import App from "../App.jsx";
import "./index.css";
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
