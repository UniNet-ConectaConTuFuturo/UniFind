import { Router } from "express";

//Import Controllers
import * as mapa from "../controllers/mapa.js";

const router = Router();

router.get("/api/mapa/universities", mapa.getUniversities);

export default router;
