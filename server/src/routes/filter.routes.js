import { Router } from "express";

//Import Controllers
import {
  getUniPoints,
  getDefaultNames,
  getDefaultCarreras,
} from "../controllers/filters/filters.js";
import { getCarreras, getNames } from "../controllers/filters/filterByInput.js";

const router = Router();

router.post("/api/filter/uni", getNames);
router.post("/api/filter/default/uni", getDefaultNames);
router.post("/api/filter/carrera", getCarreras);
router.post("/api/filter/default/carrera", getDefaultCarreras);
router.post("/api/filter", getUniPoints);

export default router;
