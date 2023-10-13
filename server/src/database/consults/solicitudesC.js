import pool from "../connection.js";

//Solicitudes
export function insertSolicitud(userID, fileName, uniID) {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO solicitudes (id_usuario,id_universidad,solicitud,estado) VALUES (?,?,?,"pendiente")',
      [userID, uniID, fileName],
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}

export function selectSolicitudes(id_usuario) {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT S.id_usuario, S.solicitud " +
        `FROM (SELECT id_universidad FROM usuarios WHERE id_usuario = ${id_usuario}) U ` +
        "LEFT JOIN solicitudes S " +
        "ON U.id_universidad = S.id_universidad",
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}
