import { Router } from "express";

//Import Controllers
import {
  getSessionForm,
  getUniversities,
  singupEntrant,
  singupEntrantCode,
} from "../controllers/register.js";
import {
  ValidateEntrantCode,
  validateEntrant,
} from "../controllers/validaciones.js";
import end from "../controllers/end.js";

const router = Router();

//Rutas registro ingresante
router.get("/registroRector/form", getUniversities);
router.get("/api/entrant/second-step", getSessionForm);

router.post("/api/validate-registro", [validateEntrant, end]);
router.post("/api/entrant/first-step", [validateEntrant, singupEntrant]);
router.post("/api/entrant/second-step", ValidateEntrantCode, singupEntrantCode);

//Rutas registro rector

//Rutas Ingreso
router.get("/login", (req, res) => {
  res.render("login.ejs");
});
router.post("/login", async (req, res) => {
  const data = req.body;
  console.log(req.body);
  try {
    let validate = await controller.ValidateData(data, pool);
    if (validate.bool) {
      dataUser = validate.objeto;
      res.redirect("/index");
    } else {
      res.render("login.ejs");
    }
  } catch (err) {
    console.log("error");
    res.render("login.ejs");
  }
});

export default router;
