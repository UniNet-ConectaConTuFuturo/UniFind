import { Router } from "express";

//Import Controllers
import * as controllers from "../controllers/favoritas.js";

const router = Router();

router.post("/api/isfavorite", controllers.isFavorite);
router.post("/api/setfavorite", controllers.setFavorite);
router.post("/api/deletefavorite", controllers.deleteFavorite);
router.post("/api/getfavorites", controllers.getFavorites);

export default router;
