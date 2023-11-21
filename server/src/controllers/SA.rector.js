import path from "path";
import jwt from "jsonwebtoken";
import fs from "fs/promises";
import __dirname from "../dirname.js";
//querys
import * as solicitudesC from "../database/consults/solicitudesC.js";
import { selectFromUsuarios } from "../database/consults/usuariosC.js";
import { selectFromUniversidades } from "../database/consults/universidadesC.js";

export async function getSolicitudes(req, res) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const { id_usuario: id_rector } = decoded;
      const data = await solicitudesC.selectSolicitudes({ id_rector });
      console.log(
        await selectFromUsuarios("id_universidad", `id_usuario = ${id_rector}`)
      );
      const { id_universidad } =
        data[0] ||
        (
          await selectFromUsuarios(
            "id_universidad",
            `id_usuario = ${id_rector}`
          )
        )[0];
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

export async function readCarta(req, res) {
  const { id_usuario } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  console.log(id_usuario);
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const { id_usuario: id_rector } = decoded;
      const { solicitud } = (
        await solicitudesC.selectSolicitud({
          id_rector,
          id_usuario,
        })
      )[0];
      console.log(solicitud, path.join(__dirname, "cartas"));
      return res.sendFile(solicitud, {
        root: path.join(__dirname, "..", "public", "cartas"),
      });
      /* const data = await fs.readFile(
      path.join(__dirname, "..", "..", "cartas", cartaName)
    ); */
    });
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

export async function changeEstado(req, res) {
  const { id_usuario } = req.body;
  const { estado } = req.params;
  console.log(estado.replace("_", " "));
  console.log("body", req.body);
  try {
    await solicitudesC.changeEstado(estado.replace("_", " "), id_usuario);
    return res.status(200).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
