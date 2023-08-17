import express from "express";
import session from "express-session";
import morgan from "morgan";
import cors from "cors";
import path from "path";
//To use __dirname
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//
import { sess } from "./config.js";

//Import Routes
import autenticationRoutes from "./routes/autentication.routes.js";
import filterRoutes from "./routes/filter.routes.js";
import getRoutes from "./routes/getdata.routes.js";
import bddRoutes from "./database/modificar.js";

const app = express();

//settings
const corsOptions = {
  origin: "*", //http://localhost:3000
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.set("view engine", "ejs");
app.set("appName", "UniNet");
app.set("port", 4000);
app.set("views", path.join(__dirname, "views"));

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

//Middlewares
app.use(cors()); //corsOptions
app.use(session(sess));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(autenticationRoutes);
app.use(getRoutes);
app.use(filterRoutes);
app.use(bddRoutes);
//app.use(express.static(path.join(__dirname, "public")));

export default app;
