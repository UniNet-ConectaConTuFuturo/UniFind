import { Router } from "express";

//Import Controllers
import * as solicitud from "../controllers/solicitudes.js";

const router = Router();

//Subir Carta
router.post("/api/upload",solicitud.uploadCarta);

//Ver Solicitudes

export default router;