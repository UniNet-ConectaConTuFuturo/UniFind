import path from "path";
import jwt from "jsonwebtoken";
import fs from "fs/promises";

//querys
import {
  insertSolicitud,
  selectSolicitudes,
} from "../database/consults/solicitudesC.js";
import { selectFromUsuarios } from "../database/consults/usuariosC.js";
import { selectFromUniversidades } from "../database/consults/universidadesC.js";
import { changeEstado } from "../database/consults/solicitudesC.js";
import { selectEstadoSolicitudes } from "../database/consults/solicitudesC.js";
import { selectEstadoTicket } from "../database/consults/ticketsC.js";

//To use __dirname
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function uploadCarta(req, res) {
  const token = req.headers.authorization.split(" ")[1];
  const { file } = req.files;
  const { id_universidad } = req.body;
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const { id_usuario } = decoded;
      const fileName = `idUn${id_universidad}idU${id_usuario}.pdf`;
      const filePath = path.join(__dirname, "cartas", fileName);
      file.mv(filePath, (err) => {
        console.log(err);
        if (err) {
          res.status(500).send({ message: "File upload failed", code: 200 });
        }
        res.status(200).send({ message: "File Uploaded", code: 200 });
      });
      await insertSolicitud(id_usuario, fileName, id_universidad);
    });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ message: "Invalid token" });
  }
}

export async function getSolicitudes(req, res) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const { id_usuario } = decoded;
      const data = await selectSolicitudes(id_usuario);
      const { id_universidad } = (
        await selectFromUsuarios("id_universidad", "id_usuario =" + id_usuario)
      )[0];
      console.log(id_universidad);
      const { nombre_universidad } = (
        await selectFromUniversidades(
          "nombre_universidad",
          "id_universidad = " + id_universidad
        )
      )[0];
      return res
        .json({
          pendiente: data.filter(
            (solicitud) => solicitud.estado === "pendiente"
          ),
          aceptada: data.filter((solicitud) => solicitud.estado === "aceptada"),
          rechazada: data.filter(
            (solicitud) => solicitud.estado === "rechazada"
          ),
          segunda_instancia: data.filter(
            (solicitud) => solicitud.estado === "segunda instancia"
          ),
          nombre_universidad,
        })
        .end();
    });
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

export async function getUser(req, res) {
  const { id_usuario } = req.body;
  try {
    return res
      .json((await selectFromUsuarios("*", `id_usuario = ${id_usuario}`))[0])
      .end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

export async function readCarta(req, res) {
  const { cartaName } = req.body;
  try {
    const data = await fs.readFile(
      path.join(__dirname, "..", "..", "cartas", cartaName)
    );
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

export async function acceptCarta(req, res) {
  const { id_usuario, estado } = req.body;
  console.log("body", req.body);
  try {
    await changeEstado(estado, id_usuario);
    return res.status(200).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
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
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
