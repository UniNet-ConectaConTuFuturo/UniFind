import * as consult from "../database/consults.js";

export async function getUniversities(req, res) {
  return res.json(await consult.selectFromUniversidades("*", 1)).end();
}
