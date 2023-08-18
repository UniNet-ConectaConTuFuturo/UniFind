import pool from "./connection.js";

//Buscar Usuario
export function selectFromUsuarios(select, where = 1) {
  return new Promise(function (resolve, reject) {
    pool.query(`SELECT ${select} FROM usuarios WHERE ${where}`, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

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

//Configurar cuenta
export function updateUser(table_name, update, mail_user) {
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE ${table_name} SET ${update} WHERE mail_user = ?`,
      [mail_user],
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}

//Mostrar carreras
export function selectFromCarreras(select, where = 1) {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT ${select} FROM carreras WHERE ${where}`, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
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

//Favoritas
export function selectFromFavoritas(select, where = 1) {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT ${select} FROM carreras WHERE ${where}`, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
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

//Solcitudes
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
