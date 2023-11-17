import { Router } from "express";
import {exportarExcel} from "../controllers/demsar.js";

router.post("/api/exportarExcel", exportarExcel);