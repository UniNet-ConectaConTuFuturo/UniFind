import * as consult from "../database/consults.js";

export async function getAllUniPoints(req, res) {
  try {
    return res
      .json(
        await consult.selectFromUniversidades(
          "id_universidad, ST_GeomFromText(ASTEXT(point))"
        )
      )
      .end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
