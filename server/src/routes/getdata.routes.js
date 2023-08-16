import { Router } from "express";

//Import Controllers
import * as get from "../controllers/getData.js";

const router = Router();

router.get("/api/uni/names", get.uniNames);
router.get("/api/carrera/names", get.carreras);
router.get("/api/uni/id-names", get.uniNamesAndId);
router.post("/api/get/uni", get.uni);
router.post("/api/get/carreras", get.carreras);

export default router;
