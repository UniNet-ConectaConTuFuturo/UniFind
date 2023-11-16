import path from "path";
import jwt from "jsonwebtoken";

//consultas
import * as consultas from "../database/consults/ticktsC.js"
import {selectFromUsuarios} from "../database/consults/usuariosC.js"

export async function sendTicket(req, res){
    const token = req.headers.authorization.split(" ")[1];
    const {id_universidad} = req.body;
    console.log(id_universidad);
    try{
        jwt.verify(token, process.env.SECRET, async (err, decoded) => {
            if (err) throw err;
            await consultas.insertTicket(decoded.id_usuario, id_universidad);
          });
    }catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ message: "Invalid token" });
      }
}

export async function estadoTicket(req, res) {
  const { id_universidad } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const data = await consultas.selectEstadoTicket(decoded.id_usuario, id_universidad);
      console.log(data)
      if(data.length > 0){ 
        console.log("estado: ",data) 
        return res.json(data).end()
        
      }else{
        return res.status(200).end()
      }
    })
  } catch (err) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

export async function getTicket(req, res) {
  const token = req.headers.authorization.split(" ")[1];
  const id_universidad = req.body.idUniversidad;
  console.log(token);
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      let select = "estado";
      let where = `id_usuario = ${decoded.id_usuario} AND id_universidad = ${id_universidad}`
      const data = await consultas.selectTicket(select, where);
      console.log(data);
      return res
        .json({
          pendiente: data.filter(
            (ticket) => ticket.estado === "pendiente"
          ),
          aceptada: data.filter(
            (ticket) => ticket.estado === "aceptado"
            ),
          rechazada: data.filter(
            (ticket) => ticket.estado === "rechazado"
          ),
        }).end();
    });
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

export async function getTicketV2(req, res) {
  
  const token = req.headers.authorization.split(" ")[1];
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const data = await consultas.selectTicketRector(decoded.id_usuario);
      console.log("datos:",data);
      return res
        .json({
          pendiente: data.filter(
            (ticket) => ticket.estadoticket === "pendiente"
          ),
          aceptada: data.filter(
            (ticket) => ticket.estadoticket === "aceptado"
            ),
        })
        .end();
    });
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

export async function acceptTicket(req, res) {
  const { id_usuario, estado } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      await consultas.changeEstadoTicket(estado, id_usuario, decoded.id_usuario);
      return res.status(200).end();
    })
    
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

export async function getMailRector(req,res){
  const {id_universidad} = req.body
  try {
    const data = await selectFromUsuarios("mail_user",`id_universidad=${id_universidad}`);
    return res.json(data).end()
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}