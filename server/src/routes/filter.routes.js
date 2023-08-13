import { Router } from "express";

//Import Controllers
import * as mapa from "../controllers/mapa.js";

const router = Router();

router.post("/api/filter/uni", mapa.getNames);
router.post("/api/filter/carrera", mapa.getCarreras);
router.post("/api/filter", mapa.getUniPoints);

export default router;
