import { Router } from "express";

//Import Controllers
import * as filters from "../controllers/filters.js";

const router = Router();

router.post("/api/filter/uni", filters.getNames);
router.post("/api/filter/carrera", filters.getCarreras);
router.post("/api/filter", filters.getUniPoints);

export default router;
