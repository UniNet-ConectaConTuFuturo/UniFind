import pool from "../connection.js";

//Mostrar carreras
export function selectFromCarreras(select, where = 1) {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT ${select} FROM carreras WHERE ${where}`, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
export function selectNombreFromCarrerasByUniversidad(id_universidad) {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT C.nombre_carrera " +
        "FROM carreras C " +
        `INNER JOIN (SELECT id_carrera from car_uni where id_universidad = ${id_universidad}) CU ` +
        "  ON CU.id_carrera = C.id_carrera ",
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}
export function selectFromCarUni(select, where = 1) {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT ${select} FROM car_uni WHERE ${where}`, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
