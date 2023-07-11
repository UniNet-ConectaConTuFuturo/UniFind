import { resolve } from "path";
import pool from "./connection.js";
import { rejects } from "assert";
import { promises } from "dns";

//Buscar Usuario
export function selectFromUsuarios(select, whereAtributte, whereValue) {
  return new Promise(function (resolve, reject) {
    pool.query(
      `SELECT ${select} FROM usuarios WHERE ${whereAtributte} = ?`,
      [whereValue],
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}

//Mostrar universidades
export function selectFromUniversidades(select, where) {
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
export function selectFromVerCode({ mail_user }) {
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
