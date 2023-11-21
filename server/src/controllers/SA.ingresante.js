import __dirname from "../dirname.js";
import path from "path";
import jwt from "jsonwebtoken";
//querys
import { selectEstadoTicket } from "../database/consults/ticketsC.js";
import {
  insertSolicitud,
  selectEstadoSolicitudes,
} from "../database/consults/solicitudesC.js";

export async function uploadCarta(req, res) {
  const token = req.headers.authorization.split(" ")[1];
  const { file } = req.files;
  const { id_universidad } = req.body;
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const { id_usuario } = decoded;
      const fileName = `idUn${id_universidad}idU${id_usuario}.pdf`;
      const filePath = path.join(__dirname, "..", "public", "cartas", fileName);
      file.mv(filePath, async (err) => {
        if (err) throw err;
        await insertSolicitud(id_usuario, fileName, id_universidad);
        res.status(200).send({ message: "File Uploaded", code: 200 });
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "File upload failed", code: 500 });
  }
}

export async function verEstado(req, res) {
  const token = req.headers.authorization.split(" ")[1];
  const { id_universidad } = req.body;
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const carta = await selectEstadoSolicitudes(
        decoded.id_usuario,
        id_universidad
      );
      const ticket = await selectEstadoTicket(
        decoded.id_usuario,
        id_universidad
      );
      return res
        .json({
          ticket: typeof ticket === "string" ? ticket : null,
          carta: typeof carta === "string" ? carta : null,
        })
        .end();
    });
  } catch (err) {
    console.error(err);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
