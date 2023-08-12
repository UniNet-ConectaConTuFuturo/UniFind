import fs from 'fs';
import path from 'path';
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config.js";
import * as consult from "../database/consults.js";

export async function uploadCarta(req,res) {
    try{
        const content = req.body.content;
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
    catch(error){
        console.error('Error:', error);
        res.status(500).send('Error saving file.');
    }
}