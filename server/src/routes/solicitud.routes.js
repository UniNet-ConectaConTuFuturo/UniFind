import { Router } from "express";

//Import Controllers
import * as solicitud from "../controllers/solicitudes.js";

const router = Router();

//Subir Carta
router.post("/api/upload",solicitud.uploadCarta);
router.post("/api/generate",solicitud.generateCarta);

//Ver Solicitudes Rector
router.post("/api/get/soli", solicitud.getSolicitudes);



export default router;