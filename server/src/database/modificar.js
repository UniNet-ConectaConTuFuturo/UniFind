import { Router } from "express";

import * as consult from "./consults.js";

const router = Router();

router.get("/modificar", async (req, res) => {
  try {
    const data = await consult.selectFromCarreras("id_carrera, nombre_carrera");
    await data.forEach(async (carrera) => {
      await consult.updateCarUni(
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
      "LICENCIATURA EN COMUNICACIoN SOCIAL",
      "LICENCIATURA EN TRABAJO SOCIAL",
      "LICENCIATURA EN RELACIONES LABORALES",
      "LICENCIATURA EN EDUCACIoN FiSICA",
      "LICENCIATURA EN RELACIONES PUBLICAS",
      "TECNICATURA EN CEREMONIAL Y PROTOCOLO",
      "TECNICATURA EN DISEÑO DE APLICACIONES MOVILES",
      "INGENIERIA INDUSTRIAL",
      "INGENIERIA CIVIL",
      "TECNICATURA EN DESARROLLO WEB",
      "LICENCIATURA EN ADMINISTRACION",
      "CONTADOR PUBLICO",
      "LICENCIATURA EN COMERCIO INTERNACIONAL",
      "LICENCIATURA EN ECONOMIA",
      "ABOGACIA",
      "LICENCIATURA EN CIENCIA POLITICA",
      "PROCURADOR",
      "LICENCIATURA EN ENFERMERIA",
      "LICENCIATURA EN NUTRICION",
      "LICENCIATURA EN KINESIOLOGIA Y FISIATRIA",
      "MEDICINA",
      "TECNICATURA EN ANATOMIA PATOLOGICA",
    ];
    await nombresDeCarreras.forEach(async (nombre_carrera) => {
      let id_carrera = await consult.selectFromCarreras(
        "id_carrera",
        "nombre_carrera = '" + nombre_carrera + "'"
      );
      console.log(id_carrera, id_carrera.length === 0);
      if (id_carrera.length === 0) {
        //no existe tal carrera en la bdd --> la creamos
        await consult.insertCarreras(nombre_carrera);
        id_carrera = await consult.selectFromCarreras(
          "id_carrera",
          "nombre_carrera = '" + nombre_carrera + "'"
        );
      }
      if (
        (
          await consult.selectFromCarUni(
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
        await consult.insertCarUni(id_carrera[0].id_carrera, id_universidad);
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
