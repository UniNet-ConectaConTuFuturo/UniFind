import { Resolver } from "dns";
import { resolve } from "path";
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
      "SELECT id_usuario, solicitud, estado FROM solicitudes WHERE id_universidad = " +
        `(SELECT id_universidad FROM usuarios WHERE id_usuario = ${id_usuario})`,
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}
export function changeEstado(estado, id_usuario){
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE solicitudes SET estado="${estado}" WHERE id_usuario = ${id_usuario}`,
      (err, data) => {
        if(err) reject(err);
        resolve(data);
      }
    )
  })
}
export function selectEstadoSolicitudes(id_usuario, id_universidad){
  return new Promise((resolve, reject)=>{
    pool.query(
      `Select estado FROM solicitudes WHERE id_usuario = ${id_usuario} AND id_universidad = ${id_universidad}`,
      (err, data) => {
        if(err) reject(err);
        resolve(data);
      }
    )
  })
}
