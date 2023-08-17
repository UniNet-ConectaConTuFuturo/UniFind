import { Router } from "express";

//Import Controllers
import * as entrant from "../controllers/registerEntrant.js";
import * as rector from "../controllers/registerRector.js";
import * as login from "../controllers/login.js";
import * as validate from "../controllers/validaciones.js";
import { whoIs } from "../middlewares/authentication.js";
import end from "../controllers/end.js";

const router = Router();

//Rutas registro ingresante
router.post("/api/validate-registro-ingresante", [
  validate.User,
  validate.Title,
  end,
]);
router.post("/api/entrant/first-step", [
  validate.User,
  validate.Title,
  entrant.EntrantFirstStep,
]);
router.post("/api/entrant/second-step", [
  validate.User,
  validate.Title,
  validate.EntrantCode,
  entrant.EntrantSecondStep,
]);

//Rutas registro rector

router.post("/api/validate-registro-rector", [
  validate.User,
  validate.IdUniversidad,
  end,
]);
router.post("/api/rector/first-step", [
  validate.User,
  validate.IdUniversidad,
  rector.RectorFirstStep,
]);
router.post("/api/rector/second-step", [
  validate.User,
  validate.IdUniversidad,
  validate.RectorCode,
  rector.RectorSecondStep,
]);

//Rutas Ingreso
//router.get("/api/login"); //no creo que lo uses
router.post("/api/login/user", [login.SignIn]);

//Rutas Middleware
router.post("/api/auth", [whoIs]);
export default router;
