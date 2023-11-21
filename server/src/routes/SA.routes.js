import { Router } from "express";

//Import Controllers
import {
  changeEstado,
  getSolicitudes,
  readCarta,
} from "../controllers/SA.rector.js";
import { uploadCarta, verEstado } from "../controllers/SA.ingresante.js";

const router = Router();

//sistema de admision - ingresante
router.post("/api/upload", uploadCarta);
router.post("/api/estados/lista-interes", verEstado);

//sistema de admision - rector
router.get("/api/get/soli", getSolicitudes);
router.post("/api/readfile", readCarta);

router.post("/api/cambio/:estado", changeEstado);
/* router.post("/api/cambio/rechazado", changeEstado);
router.post("/api/cambio/segundainstancia", changeEstado); */

export default router;
