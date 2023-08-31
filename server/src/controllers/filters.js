import jwt from "jsonwebtoken";
import * as consult from "../database/consults.js";

export async function getNames(req, res) {
  try {
    const { inputValue } = req.body;
    const data = await consult.selectFromUniversidades(
      "id_universidad, nombre_universidad, acronimo",
      "nombre_universidad LIKE '%" +
        inputValue +
        "%' OR acronimo LIKE '%" +
        inputValue +
        "%'"
    );
    const regComaWithoutY = /,.+?!y/;
    const resp = data.map((d) => {
      const acronimo = d.acronimo ? " (" + d.acronimo + ")" : "";
      const insertAcronimo = (nombre_universidad) => {
        if (nombre_universidad.includes("-")) {
          return nombre_universidad.replace(" -", acronimo + " -");
        } else {
          if (regComaWithoutY.test(nombre_universidad)) {
            console.log(nombre_universidad);
            return nombre_universidad.replace(",", " " + acronimo + ",");
          }
          return d.nombre_universidad + acronimo;
        }
      };
      return {
        value: d.id_universidad,
        label: insertAcronimo(d.nombre_universidad),
        selectedOption: d.acronimo || "",
        title: d.nombre_universidad,
      };
    });
    if (
      "Universidad de Buenos Aires (UBA)"
        .toLowerCase()
        .includes(inputValue.trim().toLowerCase())
    )
      resp.push({
        value: "UBA",
        label: "Universidad de Buenos Aires (UBA)",
        selectedOption: "UBA",
        title: "Universidad de Buenos Aires",
      });
    if (
      "Universidad Tecnologica Nacional (UTN)"
        .toLowerCase()
        .includes(inputValue.trim().toLowerCase())
    )
      resp.push({
        value: "UTN",
        label: "Universidad Tecnologica Nacional (UTN)",
        selectedOption: "UTN",
        title: "Universidad Tecnologica Nacional",
      });

    return res
      .send(
        resp.sort(function (a, b) {
          if (inputValue)
            switch (inputValue.toLowerCase()) {
              case a.label.toLowerCase():
              case a.selectedOption.toLowerCase():
              case a.title.toLowerCase():
                return -1;
              default:
                break;
            }
          if (a.label > b.label) {
            return 1;
          }
          if (
            a.label < b.label &&
            (!inputValue || inputValue.toLowerCase() === b.label.toLowerCase())
          ) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
      )
      .end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function getCarreras(req, res) {
  try {
    const { inputValue } = req.body;
    const data = await consult.selectFromCarreras(
      "id_carrera, nombre_carrera",
      "nombre_carrera LIKE '%" + inputValue + "%'"
    );
    const resp = data.map((d) => ({
      value: d.id_carrera,
      label: d.nombre_carrera,
    }));
    return res
      .send(
        resp.sort(function (a, b) {
          if (inputValue.toLowerCase() === a.label.toLowerCase()) {
            return -1;
          }
          if (a.label > b.label) {
            return 1;
          }
          if (
            a.label < b.label &&
            (!inputValue || inputValue.toLowerCase() === b.label.toLowerCase())
          ) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
      )
      .end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

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

  const data = await consult.selectFromUniversidades(
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
        await consult.selectFromUsuarios("id_usuario", "id_usuario = " + id);
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
