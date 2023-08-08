import * as consult from "../database/consults.js";

export async function getUniPoints(req, res) {
  try {
    const { names, gestion } = req.body;

    console.log(names, gestion);
    let where = "";

    const whereNames =
      names.length === 0
        ? ""
        : "nombre_universidad" +
          " IN " +
          "(" +
          names.map((n) => "'" + n + "'") +
          ")";
    where += whereNames;
    const whereGestion =
      gestion === null
        ? ""
        : (where.length === 0 ? "" : " AND ") +
          ("gestion_universidad" + "=" + ("'" + gestion + "'"));
    where += whereGestion;
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
