import { Router } from "express";

//Import Controllers
import * as mapa from "../controllers/mapa.js";

const router = Router();

router.post("/api/mapa/getpoints", mapa.getUniPoints);

export default router;
