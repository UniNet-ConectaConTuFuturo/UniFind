import pool from "../connection.js";

//Insertar Codigo de Verificacion
export function insertCode(user_code, mail_user) {
  return new Promise((resolve, reject) => {
    pool.query(
      "INSERT INTO verificationcode (user_code, mail_user) VALUES (?, ?)",
      [user_code, mail_user],
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}

//Buscar Codigo de Verificacion
export function selectFromVerCode(mail_user) {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT user_code FROM verificationcode WHERE mail_user = ?",
      [mail_user],
      (err, code) => {
        if (err) reject(err);
        resolve(code);
      }
    );
  });
}
export function UpdateVerCode(user_code, mail_user) {
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE verificationcode SET user_code=${user_code},mail_user="${mail_user}" WHERE mail_user = ?`,
      [mail_user],
      (err, code) => {
        if (err) reject(err);
        resolve(code);
      }
    );
  });
}
export function DeleteVerCode(mail_user) {
  return new Promise((resolve, reject) => {
    pool.query(
      `DELETE FROM verificationcode WHERE mail_user = ?`,
      [mail_user],
      (err, code) => {
        if (err) reject(err);
        resolve(code);
      }
    );
  });
}
