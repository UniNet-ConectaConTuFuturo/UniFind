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

/*SELECT U.name_user, U.mail_user 
FROM solicitudes S
LEFT JOIN usuarios U ON U.id_usuario = S.id_usuario
WHERE S.id_universidad = 63 */
