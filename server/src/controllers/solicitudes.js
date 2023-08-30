import fs from 'fs';
import path from 'path';
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config.js";
import * as consult from "../database/consults.js";

export async function uploadCarta(req,res) {
    const {content, token, id_universidad} = req.body
    try{
        const userID = jwt.verify(token, jwtConfig.SECRET);
        const fileName = `${userID.id}.txt`;
        const filePath = path.join("uninet/server/cartas",fileName);
        await fs.writeFile(filePath,content);
        await consult.insertSolicitud(userID.id,fileName,id_universidad);
    }
    catch(error){
        console.error('Error verifying token:', error);
        res.status(401).json({ message: 'Invalid token' });
    }  
}