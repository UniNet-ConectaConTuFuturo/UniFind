import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import fileupload from "express-fileupload";
import __dirname from "./dirname.js";

//Import Routes
import autenticationRoutes from "./routes/autentication.routes.js";
import accountRoutes from "./routes/account.routes.js";
import filterRoutes from "./routes/filter.routes.js";
import getRoutes from "./routes/getdata.routes.js";
import favoritasRoutes from "./routes/favoritas.routes.js";
import bddRoutes from "./database/modificar.js";
import SA_Routes from "./routes/SA.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";
import demsarRoutes from "./routes/demsar.routes.js";

const app = express();
// get config vars
dotenv.config({ path: path.join(__dirname, "config.env") });
//settings
const corsOptions = {
  origin: "*", //http://localhost:8080
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.set("appName", process.env.NAME);
app.set("port", process.env.PORT | 4000);

//Middlewares
app.use(cors()); //corsOptions
app.use(
  session({
    secret: "Volter123",
    cookie: {
      secure: process.env.STATUS === "production",
      maxAge: 1000 * 60 * 60, //1 hora
    },
    resave: false,
    saveUninitialized: false,
    rolling: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileupload());
app.use(express.static("files"));
//Routes
app.use(autenticationRoutes);
app.use(accountRoutes);
app.use(getRoutes);
app.use(filterRoutes);
app.use(favoritasRoutes);
app.use(bddRoutes);
app.use(SA_Routes);
app.use(ticketRoutes);
app.use(demsarRoutes);

//app.use(express.static(path.join(__dirname, "public")));

export default app;
