import { Router } from "express";

//Import Controllers
import * as get from "../controllers/getData.js";

const router = Router();

router.post("/api/get/uni", get.uni);
router.post("/api/get/carreras", get.carreras);


export default router;
