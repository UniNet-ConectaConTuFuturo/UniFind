import jwt from "jsonwebtoken";
import { selectFromUniversidades } from "../../database/consults/universidadesC.js";
import { selectFromUsuarios } from "../../database/consults/usuariosC.js";

const whereFavoritas = (id) => {
  return (
    "id_universidad IN (SELECT id_universidad FROM favoritas where id_usuario = " +
    id +
    ")"
  );
};
const whereNames = (names, where) => {
  const ids = [],
    creates = [];
  names.forEach((id) =>
    typeof id === "number" ? ids.push(id) : creates.push(id)
  );
  const whereId = ids.length === 0 ? "" : "id_universidad IN (" + ids + ")";
  const whereNombre =
    creates.length === 0
      ? ""
      : (ids.length === 0 ? "" : " OR ") +
        creates
          .map(
            (nombre, i) =>
              (i === 0 ? "" : " OR ") +
              "nombre_universidad LIKE '%" +
              nombre +
              "%' OR acronimo = '" +
              nombre +
              "'"
          )
          .join("");
  return whereId === "" && whereNombre === ""
    ? ""
    : (where.length === 0 ? "" : " AND ") + "(" + whereId + whereNombre + ")";
};
const whereGestion = (gestion, where) => {
  const whereG = "gestion_universidad = '" + gestion + "'";
  return gestion === null ? "" : (where.length === 0 ? "" : " AND ") + whereG;
};
const whereCarrera = (carreras, where) => {
  const ids = [],
    creates = [];
  carreras.forEach((id) =>
    typeof id === "number" ? ids.push(id) : creates.push(id)
  );
  const whereId =
    ids.length === 0
      ? ""
      : "id_universidad IN " +
        "(SELECT id_universidad from car_uni " +
        ("WHERE id_carrera IN (" + ids + "))");
  const whereNombre =
    creates.length === 0
      ? ""
      : (ids.length === 0 ? "" : " OR ") +
        "id_universidad IN " +
        "(SELECT id_universidad from car_uni WHERE id_carrera IN " +
        "(SELECT id_carrera FROM carreras WHERE " +
        creates
          .map(
            (nombre, i) =>
              (i === 0 ? "" : " OR ") + "nombre_carrera LIKE '%" + nombre + "%'"
          )
          .join("") +
        "))";
  return whereId === "" && whereNombre === ""
    ? ""
    : (where.length === 0 ? "" : " AND ") + "(" + whereId + whereNombre + ")";
};
async function WheresAndConsult(where, names, gestion, carreras) {
  where += whereNames(names, where);
  where += whereGestion(gestion, where);
  where += whereCarrera(carreras, where);
  console.log(where);

  const data = await selectFromUniversidades(
    "id_universidad, ST_GeomFromText(ASTEXT(point)) as Point",
    where === "" ? 1 : where
  );
  return data;
}
export async function getUniPoints(req, res) {
  try {
    const { token, names, gestion, carreras } = req.body;
    let where = "";
    if (token) {
      jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if (err) throw err;
        const { id } = decoded;
        await selectFromUsuarios("id_usuario", "id_usuario = " + id);
        where += whereFavoritas(id);
        const data = await WheresAndConsult(where, names, gestion, carreras);

        return res.json(data).end();
      });
    } else {
      const data = await WheresAndConsult(where, names, gestion, carreras);
      return res.json(data).end();
    }
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}