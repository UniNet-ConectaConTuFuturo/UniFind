import path from 'path';
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config.js";
import * as consult from "../database/consults.js";

//To use __dirname
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function uploadCarta(req,res) {
    //const {token, id_universidad} = req.body;
    console.log(req.body);
    //console.log(req.files);
    const file = req.files.file; 
    try{
        /*jwt.verify(token, process.env.SECRET, async (err, decoded) => {
            if (err) throw err;
            const { id } = decoded;*/
            const fileName = `hola.txt`;
            //const fileName = `${id_universidad}${id}.txt`;
            const filePath = path.join(__dirname, '..', '..', "cartas", fileName);
            file.mv(filePath, (err) =>{
            console.log(err);
            if(err){
                res.status(500).send({ message: "File upload failed", code: 200 });
            }
            res.status(200).send({ message: "File Uploaded", code: 200 });
        });
        //await consult.insertSolicitud(id,fileName,id_universidad);
        //})
    }
    catch(error){
        console.error('Error verifying token:', error);
        res.status(401).json({ message: 'Invalid token' });
    }  
}
