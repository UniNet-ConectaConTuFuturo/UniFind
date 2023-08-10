import { Router } from "express";

//Import Controllers
import * as get from "../controllers/getData.js";

const router = Router();

router.get("/api/uni/names", get.uniNames);
router.get("/api/carrera/names", get.carreras);
router.get("/api/uni/id-names", get.uniNamesAndId);

export default router;
