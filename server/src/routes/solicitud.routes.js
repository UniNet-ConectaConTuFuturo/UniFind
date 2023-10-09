import { Router } from "express";

//Import Controllers
import * as solicitud from "../controllers/solicitudes.js";

const router = Router();

//Subir Carta
router.post("/api/upload",solicitud.uploadCarta);
router.post("/api/generate",solicitud.generateCarta);

//Ver Solicitudes Rector
router.post("/api/get/soli", solicitud.getSolicitudes);
router.post("/api/get/user", solicitud.getUser);
router.post("/api/readfile", solicitud.readCarta);



export default router;