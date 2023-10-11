import pool from "../connection.js";

//Mostrar universidades
export function selectFromUniversidades(select, where = 1) {
  return new Promise(function (resolve, reject) {
    pool.query(
      `SELECT ${select} FROM universidades WHERE ${where}`,
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}
//Filtrar universidades
export function filtrarUniversidades({
  ids_universidad,
  creates_universidades,
  ids_carreras,
  creates_carreras,
  gestion,
  id_usuario,
}) {
  return new Promise((resolve, reject) =>
    pool.query(
      "SELECT DISTINCT(U.id_universidad), U.nombre_universidad, ST_GeomFromText(ASTEXT(U.point)) as Point " +
        `FROM (SELECT id_universidad, nombre_universidad, point FROM universidades) U ` +
        (ids_universidad.length
          ? `INNER JOIN (SELECT id_universidad FROM universidades WHERE id_universidad IN (${ids_universidad})) IU ` +
            "ON U.id_universidad = IU.id_universidad "
          : "") +
        (creates_universidades.length
          ? `INNER JOIN (SELECT id_universidad FROM universidades WHERE ${creates_universidades.map(
              (nombre, i) =>
                (i === 0 ? "" : " OR ") +
                `nombre_universidad LIKE '%${nombre}%' OR acronimo = '${nombre}'`
            )}) CU ` + "ON U.id_universidad = CU.id_universidad "
          : "") +
        (ids_carreras.length
          ? `INNER JOIN (SELECT id_universidad FROM car_uni WHERE id_carrera IN (${ids_carreras})) IC ` +
            "ON U.id_universidad = IC.id_universidad "
          : "") +
        (creates_carreras.length
          ? "INNER JOIN (SELECT C1.id_universidad " +
            "FROM car_uni C1 " +
            `INNER JOIN (SELECT id_carrera FROM carreras WHERE ${creates_carreras.map(
              (nombre, i) =>
                (i === 0 ? "" : " OR ") + `nombre_carrera LIKE '%${nombre}%'`
            )}) C2 ` +
            "ON C1.id_carrera = C2.id_carrera) CC " +
            "ON U.id_universidad = CC.id_universidad"
          : "") +
        (gestion
          ? `INNER JOIN (SELECT id_universidad FROM universidades WHERE gestion_universidad = '${gestion}') G ` +
            "ON U.id_universidad = G.id_universidad "
          : "") +
        (id_usuario
          ? `INNER JOIN (SELECT id_universidad FROM favoritas where id_usuario = ${id_usuario}) F ` +
            "ON U.id_universidad = F.id_universidad "
          : ""),
      (err, data) => (err ? reject(err) : resolve(data))
    )
  );
}
export function filtrarUniversidadesByCarreras({
  ids_carreras,
  creates_carreras,
}) {
  return new Promise((resolve, reject) =>
    pool.query(
      "SELECT DISTINCT(C.id_carrera), C.nombre_carrera " +
        `FROM (SELECT id_carrera, nombre_carrera FROM carreras ` +
        (ids_carreras.length ? `WHERE id_carrera IN (${ids_carreras}) ` : "") +
        ") C " +
        (creates_carreras.length
          ? `INNER JOIN (SELECT id_carrera FROM carreras WHERE ${creates_carreras.map(
              (nombre, i) =>
                (i === 0 ? "" : " OR ") + `nombre_carrera LIKE '%${nombre}%'`
            )}) CC ` + "ON C.id_carrera = CC.id_carrera "
          : ""),
      (err, data) => (err ? reject(err) : resolve(data))
    )
  );
}
export function filtrarUniversidadesByNames({
  ids_universidad,
  creates_universidades,
}) {
  return new Promise((resolve, reject) =>
    pool.query(
      "SELECT DISTINCT(U.id_universidad), U.nombre_universidad, U.acronimo " +
        `FROM (SELECT id_universidad, nombre_universidad, acronimo FROM universidades ` +
        (ids_universidad.length
          ? ` WHERE id_universidad IN (${ids_universidad}) `
          : "") +
        ") U " +
        (creates_universidades.length
          ? `INNER JOIN (SELECT id_universidad FROM universidades WHERE ${creates_universidades.map(
              (nombre, i) =>
                (i === 0 ? "" : " OR ") +
                `nombre_universidad LIKE '%${nombre}%' OR acronimo = '${nombre}'`
            )}) CU ` + "ON U.id_universidad = CU.id_universidad "
          : ""),
      (err, data) => (err ? reject(err) : resolve(data))
    )
  );
}
