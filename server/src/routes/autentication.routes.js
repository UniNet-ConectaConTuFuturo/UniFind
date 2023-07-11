import { Router } from "express";

//Import Controllers
import * as registro from "../controllers/register.js";
import * as login from "../controllers/login.js";
import {
  validateEntrantCode,
  validateEntrant,
} from "../controllers/validaciones.js";
import end from "../controllers/end.js";

const router = Router();

//Rutas registro ingresante
router.post("/api/validate-registro", [validateEntrant, end]);
router.post("/api/entrant/first-step", [
  validateEntrant,
  registro.singupEntrant,
]);
router.post("/api/entrant/second-step", [
  validateEntrantCode,
  registro.singupEntrantCode,
]);

//Rutas registro rector
router.get("/api/rector/form", registro.getUniversities);

router.post("/api/rector/first-step", [validateEntrant, registro.singupRector]);
router.post("/api/rector/second-step", [
  validateEntrantCode,
  registro.singupCodeRector,
]);

//Rutas Ingreso
router.get("/api/login");
router.post("/api/login/user", [login.SignIn]);

//Rutas Pagina principal
router.get("/api/index");
export default router;
