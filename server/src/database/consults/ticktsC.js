import { resolve } from "path";
import pool from "../connection.js";
import { rejects } from "assert";

export function insertTicket(userID, uniID){
    return new Promise((resolve, reject) =>{
        pool.query(
            ' INSERT INTO tickets(id_usuario, id_universidad, estado) VALUES ( ? , ? , "pendiente") ',
            [userID,uniID],
            (err,data)=>{
                if (err) reject(err);
                resolve(data);
            }
        );
    })
}

export function selectEstadoTicket(id_usuario, id_universidad){
    return new Promise((resolve, reject)=>{
      pool.query(
        `Select estado FROM tickets WHERE id_usuario = ${id_usuario} AND id_universidad = ${id_universidad}`,
        (err, data) => {
          if(err) reject(err);
          if(data.length > 0){
          resolve(data[0].estado)
        }else{
          resolve(data)
        };
        }
      )
    })
  }

export function selectTicket(select, where){
    return new Promise((resolve, reject)=>{
        pool.query(
            `SELECT ${select} FROM tickets WHERE ${where}`,
            (err,data)=>{
                if(err) reject(err);
                resolve(data);
            }
        )
    })
}

export function selectTicketRector(id){
  return new Promise((resolve, reject)=>{
    pool.query(
      `SELECT u.id_usuario, u.mail_user, u.tel_user, t.estado as estadoticket from usuarios u JOIN tickets t on u.id_usuario = t.id_usuario AND t.id_universidad = (SELECT id_universidad from usuarios WHERE id_usuario= ${id})`,
      (err,data)=>{
        if(err) reject(err);
        resolve(data);
      }
    )
  })
}