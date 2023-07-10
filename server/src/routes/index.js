import { Router } from "express";

const router = Router();

//Rutas registro ingresante
router.get("/index", (req, res) => {
  res.render("index.ejs");
});

export default router;