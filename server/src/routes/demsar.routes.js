import { Router } from "express";
import {exportarExcel} from "../controllers/demsar.js";
const router = Router();
router.get('/api/exportarexcel', exportarExcel);

export default router;