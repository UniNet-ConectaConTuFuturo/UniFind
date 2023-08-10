import { Router } from "express";

//Import Controllers
import * as mapa from "../controllers/mapa.js";
import * as get from "../controllers/getData.js";

const router = Router();

router.get("/api/mapa/getnames", get.getNames);
router.get("/api/mapa/getcarreras", get.getCarreras);
router.post("/api/mapa/getnames", mapa.getNames);
router.post("/api/mapa/getcarreras", mapa.getCarreras);
router.post("/api/mapa/getpoints", mapa.getUniPoints);

export default router;
