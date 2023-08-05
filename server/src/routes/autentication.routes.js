import { Router } from "express";

//Import Controllers
import * as registro from "../controllers/register.js";
import * as login from "../controllers/login.js";
import * as validate from "../controllers/validaciones.js";
import { whoIs } from "../middlewares/authentication.js";
import end from "../controllers/end.js";

const router = Router();

//Rutas registro ingresante
router.post("/api/validate-registro", [validate.User, validate.Title, end]);
router.post("/api/entrant/first-step", [
  validate.User,
  validate.Title,
  registro.EntrantFirstStep,
]);
router.post("/api/entrant/second-step", [
  validate.User,
  validate.Title,
  validate.EntrantCode,
  registro.EntrantSecondStep,
]);

//Rutas registro rector
router.get("/api/rector/form", registro.getUniversities);

router.post("/api/validate-registro-rector", [
  validate.User,
  validate.IdUniversidad,
  end,
]);
router.post("/api/rector/first-step", [
  validate.User,
  validate.IdUniversidad,
  registro.RectorFirstStep,
]);
router.post("/api/rector/second-step", [
  validate.User,
  validate.IdUniversidad,
  validate.RectorCode,
  registro.RectorSecondStep,
]);

//Rutas Ingreso
//router.get("/api/login"); //no creo que lo uses
router.post("/api/login/user", [login.SignIn]);

//Rutas Middleware
router.post("/api/auth", [whoIs]);
export default router;
