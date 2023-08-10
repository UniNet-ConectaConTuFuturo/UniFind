import { Router } from "express";

//Import Controllers
import * as mapa from "../controllers/mapa.js";

const router = Router();

router.post("/api/filter/uni/names", mapa.getNames);
router.post("/api/filter/carrera/names", mapa.getCarreras);
router.post("/api/filter/uni/id-points", mapa.getUniPoints);

export default router;
