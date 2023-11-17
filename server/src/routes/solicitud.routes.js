import { Router } from "express";

//Import Controllers
import * as solicitud from "../controllers/solicitudes.js";

const router = Router();

//Subir Carta
router.post("/api/upload",solicitud.uploadCarta);
router.post("/api/generate",solicitud.generateCarta);

//Ver Solicitudes Rector
router.get("/api/get/soli", solicitud.getSolicitudes);
router.post("/api/get/user", solicitud.getUser);
router.post("/api/readfile", solicitud.readCarta);

//Cambio de estado
router.post("/api/cambio/aceptado", solicitud.acceptCarta);
router.post("/api/cambio/rechazado", solicitud.acceptCarta);
router.post("/api/cambio/segundainstancia", solicitud.acceptCarta);

//Ver estado
router.post("/api/estados/lista-interes", solicitud.verEstado);



export default router;