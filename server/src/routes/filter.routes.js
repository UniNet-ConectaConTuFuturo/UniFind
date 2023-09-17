import { Router } from "express";

//Import Controllers
import { getUniPoints } from "../controllers/filters/filters.js";
import { getCarreras, getNames } from "../controllers/filters/filterByInput.js";

const router = Router();

router.post("/api/filter/uni", getNames);
router.post("/api/filter/carrera", getCarreras);
router.post("/api/filter", getUniPoints);

export default router;
