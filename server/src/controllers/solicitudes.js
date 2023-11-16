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

//To use __dirname
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function uploadCarta(req, res) {
  //const {token, id_universidad} = req.body;
  const token = req.headers.authorization.split(" ")[1];
  const file = req.files["file[originFileObj]"];
  const { id_universidad } = req.body;
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const fileName = `idUn${id_universidad}idU${id}.txt`;
      const filePath = path.join(__dirname, "cartas", fileName);
      file.mv(filePath, (err) => {
        console.log(err);
        if (err) {
          res.status(500).send({ message: "File upload failed", code: 200 });
        }
        res.status(200).send({ message: "File Uploaded", code: 200 });
      });
      await insertSolicitud(decoded.id_usuario, fileName, id_universidad);
    });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ message: "Invalid token" });
  }
}

export async function generateCarta(req, res) {
  const token = req.headers.authorization.split(" ")[1];
  const {id_universidad} = req.body;
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const {id_usuario} = decoded
      let where = `id_usuario = ${id_usuario}`;
      const select = "name_user,mail_user,title";
      const user = await selectFromUsuarios(select, where);
      where = `id_universidad = ${id_universidad}`;
      const uni = await selectFromUniversidades("nombre_universidad", where);
      const data = `${user[0].name_user}
      ${user[0].mail_user}
      
      Estimado señor rector de la ${uni[0].nombre_universidad},
      Es un placer dirigirme a usted con el propósito de solicitar la inscripción en la ${uni[0].nombre_universidad}. Mi nombre es ${user[0].name_user}, y me he graduado de la escuela secundaria con el título de ${user[0].title}. 
      La razón detrás de mi elección de estudiar en la ${uni[0].nombre_universidad} radica en su destacada oferta académica, su renombrado prestigio y sus excelentes instalaciones. 
      Durante mis años de educación secundaria, he trabajado diligentemente para alcanzar mis metas académicas y personales. Estos logros han fortalecido mi deseo de embarcarme en una educación universitaria rigurosa y enriquecedora en ${uni[0].nombre_universidad}.
      Además de mis logros, me motiva profundamente la posibilidad de contribuir a la comunidad de la ${uni[0].nombre_universidad}. Estoy seguro de que mi compromiso y entusiasmo serán valiosos para la universidad.
      Espero con anticipación las oportunidades de aprendizaje y crecimiento que esta institución ofrece, y tengo grandes expectativas de alcanzar mis metas académicas y profesionales durante mi tiempo en la ${uni[0].nombre_universidad}.
      
      Agradezco de antemano su consideración de mi solicitud. Le saludo atentamente,
      
      ${user[0].name_user}`;
      const fileName = `idUn${id_universidad}idU${id_usuario}.txt`;
      console.log("dirname;", __dirname);
      const filePath = path.join(__dirname, "cartas", fileName);
      await fs.writeFile(filePath, data, (err) => {
        if (err) {
          console.log(err);
        }
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

      const data = await selectSolicitudes(decoded.id_usuario);
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
    return res.json((await selectFromUsuarios("*", `id_usuario = ${id_usuario}`))[0]).end();
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
      const data = await selectEstadoSolicitudes(decoded.id_usuario, id_universidad);

      if (data.length > 0) {
        console.log("estado: ", data);
        return res.json(data).end();
      } else {
        return res.status(200).end();
      }
    });
  } catch (err) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
