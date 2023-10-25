import { resolve } from "path";
import pool from "../connection.js";

export function insertTicket(userID, uniID){
    return new Promise((resolve, reject) =>{
        pool.query(
            'INSERT INTO tickets(id_usuario,id_universidad,estado) VALUES (?,?,"pendiente")'
            [userID,uniID],
            (err,data)=>{
                if (err) reject(err);
                resolve(data);
            }
        );
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