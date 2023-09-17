import pool from "../connection.js";

//Favoritas
export function selectFromFavoritas(select, where = 1) {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT ${select} FROM favoritas WHERE ${where}`,
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}
export function insertFavorita({ id_usuario, id_universidad }) {
  return new Promise((resolve, reject) => {
    pool.query(
      "INSERT INTO favoritas (id_usuario, id_universidad) VALUES (?, ?)",
      [id_usuario, id_universidad],
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}
export function DeleteFavorita({ id_usuario, id_universidad }) {
  return new Promise((resolve, reject) => {
    pool.query(
      `DELETE FROM favoritas WHERE id_usuario = ? AND id_universidad = ?`,
      [id_usuario, id_universidad],
      (err, code) => {
        if (err) reject(err);
        resolve(code);
      }
    );
  });
}
