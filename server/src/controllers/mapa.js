import * as consult from "../database/consults.js";

export async function getNames(req, res) {
  try {
    const { inputValue } = req.body;
    console.log(inputValue);
    const data = await consult.selectFromUniversidades(
      "nombre_universidad",
      "nombre_universidad LIKE '%" + inputValue + "%'"
    );
    return res.send(data.map((d) => d.nombre_universidad)).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function getCarreras(req, res) {
  try {
    const { inputValue } = req.body;
    console.log(inputValue);
    const data = await consult.selectFromCarreras(
      "nombre_carrera",
      "nombre_carrera LIKE '%" + inputValue + "%'"
    );

    return res.send(data.map((d) => d.nombre_carrera)).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

const whereNames = (names) =>
  names.length === 0
    ? ""
    : "nombre_universidad" +
      " IN " +
      "(" +
      names.map((n) => "'" + n + "'") +
      ")";
const whereGestion = (gestion, where = "") =>
  gestion === null
    ? ""
    : (where.length === 0 ? "" : " AND ") +
      ("gestion_universidad" + "=" + ("'" + gestion + "'"));
const whereCarrera = (carreras, where = "") =>
  carreras.length === 0
    ? ""
    : (where.length === 0 ? "" : " AND ") +
      ("id_universidad" +
        " IN " +
        "(SELECT id_universidad from carreras WHERE nombre_carrera IN " +
        "(" +
        carreras.map((n) => "'" + n + "'") +
        "))");
export async function getUniPoints(req, res) {
  try {
    const { names, gestion, carreras } = req.body;

    console.log(names, gestion);
    let where = "";

    where += whereNames(names);
    where += whereGestion(gestion, where);
    where += whereCarrera(carreras, where);
    console.log(where);

    const data = await consult.selectFromUniversidades(
      "id_universidad, ST_GeomFromText(ASTEXT(point)) as Point, nombre_universidad, maps_universidad, direccion_universidad, localidad_universidad, zona_universidad",
      where === "" ? 1 : where
    );
    return res.json(data).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
