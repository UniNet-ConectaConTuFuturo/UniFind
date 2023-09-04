import path from 'path';
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config.js";
import * as consult from "../database/consults.js";

export async function uploadCarta(req,res) {
    //const {token, id_universidad} = req.body;
    console.log(req.body);
    //console.log(req.files);
    const file = req.files.archivo; 
    try{
        /*jwt.verify(token, process.env.SECRET, async (err, decoded) => {
            if (err) throw err;
            const { id } = decoded;*/
        const fileName = `hola.txt`;
        //const fileName = `${id_universidad}${id}.txt`;
        const filePath =__dirname + "/server/cartas" + fileName;
        file.mv(filePath, (err) =>{
            if(err){
                console.log(err);
            }
        });
        //await consult.insertSolicitud(id,fileName,id_universidad);
        //})
    }
    catch(error){
        console.error('Error verifying token:', error);
        res.status(401).json({ message: 'Invalid token' });
    }  
}
