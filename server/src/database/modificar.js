import { Router } from "express";

import * as consult from "./consults.js";

const router = Router();

router.get("/modificar", async (req, res) => {
  try {
    const data = await consult.selectFromCarreras("id_carrera, nombre_carrera");
    await data.forEach(async (carrera) => {
      await consult.UpdateCarUni(
        "id_carrera = " + carrera.id_carrera,
        "nombre_carrera = '" + carrera.nombre_carrera + "'"
      );
    });
    console.log(data.length);
    return res.json(data).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
});

export default router;
