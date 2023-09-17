import pool from "../connection.js";

//modificar manuelmente la bbd
export function updateCarUni(set, where) {
  return new Promise((resolve, reject) => {
    pool.query(`UPDATE car_uni SET ${set} WHERE ${where}`, (err, code) => {
      if (err) reject(err);
      resolve(code);
    });
  });
}
export function insertCarreras(nombre_carrera) {
  return new Promise(function (resolve, reject) {
    pool.query(
      `INSERT INTO carreras(nombre_carrera) VALUES ('${nombre_carrera}')`,
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}
export function insertCarUni(id_carrera, id_universidad) {
  return new Promise(function (resolve, reject) {
    pool.query(
      `INSERT INTO car_uni(id_carrera, id_universidad) VALUES ('${id_carrera}', '${id_universidad}')`,
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}
