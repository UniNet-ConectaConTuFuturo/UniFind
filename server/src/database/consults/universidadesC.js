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
