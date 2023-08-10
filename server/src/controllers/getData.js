import * as consult from "../database/consults.js";
export async function getNames(req, res) {
  try {
    const data = await consult.selectFromUniversidades("nombre_universidad");
    return res.send(data.map((d) => d.nombre_universidad)).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function getCarreras(req, res) {
  try {
    const data = await consult.selectFromCarreras("nombre_carrera");
    return res.send(data.map((d) => d.nombre_carrera)).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
