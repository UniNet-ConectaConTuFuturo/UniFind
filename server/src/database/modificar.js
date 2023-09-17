import { Router } from "express";

import {
  insertCarUni,
  insertCarreras,
  updateCarUni,
} from "./consults/modificarC.js";
import { selectFromCarreras, selectFromCarUni } from "./consults/carrerasC.js";

const router = Router();

router.get("/modificar", async (req, res) => {
  try {
    const data = await selectFromCarreras("id_carrera, nombre_carrera");
    await data.forEach(async (carrera) => {
      await updateCarUni(
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

router.get("/agregar/carreras", async (req, res) => {
  try {
    const id_universidad = 63;
    const nombresDeCarreras = [
      [
        "LICENCIATURA EN TRABAJO SOCIAL",
        "LICENCIATURA EN CIENCIAS DE LA EDUCACION",
        "LICENCIATURA EN FILOSOFIA",
        "LICENCIATURA EN HISTORIA",
        "LICENCIATURA EN LETRAS",
        "LICENCIATURA EN PSICOLOGIA",
        "LICENCIATURA EN PSICOPEDAGOGIA",
        "PROFESORADO DE PSICOLOGIA",
        "PROFESORADO EN CIENCIAS DE LA EDUCACION",
        "PROFESORADO EN FILOSOFIA",
        "PROFESORADO EN HISTORIA",
        "PROFESORADO EN LETRAS",
        "PROFESORADO EN PSICOPEDAGOGIA",
      ],
    ];
    await nombresDeCarreras.forEach(async (nombre_carrera) => {
      let id_carrera = await selectFromCarreras(
        "id_carrera",
        "nombre_carrera = '" + nombre_carrera + "'"
      );
      console.log(id_carrera, id_carrera.length === 0);
      if (id_carrera.length === 0) {
        //no existe tal carrera en la bdd --> la creamos
        await insertCarreras(nombre_carrera);
        id_carrera = await selectFromCarreras(
          "id_carrera",
          "nombre_carrera = '" + nombre_carrera + "'"
        );
      }
      if (
        (
          await selectFromCarUni(
            "*",
            "id_carrera = '" +
              id_carrera[0].id_carrera +
              "' AND id_universidad = '" +
              id_universidad +
              "'"
          )
        ).length === 0
      ) {
        console.log(id_carrera[0].id_carrera);
        await insertCarUni(id_carrera[0].id_carrera, id_universidad);
      }
    });
    return res.status(204).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
});

export default router;
