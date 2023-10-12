import pool from "../connection.js";

//Buscar Usuario
export function selectFromUsuarios(select, where = 1) {
  return new Promise(function (resolve, reject) {
    pool.query(`SELECT ${select} FROM usuarios WHERE ${where}`, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
//Configurar cuenta
export function updateUser(data, id_usuario) {
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE usuarios SET ? WHERE id_usuario = ?`,
      [data, id_usuario],
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}
//Insertar Ingresante
export function setEntrant({
  mail_user,
  name_user,
  password_user,
  date_user,
  direction_user,
  tel_user,
  title,
}) {
  const data = {
    mail_user,
    name_user,
    password_user,
    date_user,
    direction_user,
    tel_user,
    title,
  };
  return new Promise(function (resolve, reject) {
    pool.query("INSERT INTO usuarios SET ?", [data], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
//Insertar Rector
export function setRector({
  mail_user,
  name_user,
  password_user,
  date_user,
  direction_user,
  tel_user,
  id_universidad,
}) {
  const data = {
    mail_user,
    name_user,
    password_user,
    date_user,
    direction_user,
    tel_user,
    id_universidad,
  };
  return new Promise(function (resolve, reject) {
    pool.query("INSERT INTO usuarios SET ?", [data], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
