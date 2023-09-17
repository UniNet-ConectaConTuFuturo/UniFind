import {
  simpleDataValidation,
  mailValidation,
} from "../../libs/SimpleDataValidation.js";
import { selectFromUsuarios } from "../../database/consults/usuariosC.js";
import { selectFromUniversidades } from "../../database/consults/universidadesC.js";
import { codeValidation } from "../../libs/CodeFunctions.js";
export async function User(req, res, next) {
  try {
    const data = req.body;
    /* Validar Mail */
    const wrongmail = mailValidation(data);
    if (wrongmail) return res.json(wrongmail).end();
    /* Comprobar que no Exista */
    const user_data = await selectFromUsuarios(
      "id_usuario",
      "mail_user" + " = " + "'" + data.mail_user + "'"
    );
    if (user_data.length)
      return res.json({ spanEmail: "Este usuario ya está registrado" }).end();
    /* Validar Formato */
    const wrongdata = simpleDataValidation(data);
    if (wrongdata) return res.json(wrongdata).end();

    next();
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}
export function Title(req, res, next) {
  try {
    const { title } = req.body;
    if (!title.trim()) return res.json({ spanTitle: "Completar" }).end();
    next();
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}
export function IdUniversidad(req, res, next) {
  try {
    const { id_universidad } = req.body;
    console.log(id_universidad);
    if (id_universidad === "")
      return res.json({ spanUniversity: "Completar" }).end();
    next();
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}

export async function EntrantCode(req, res, next) {
  try {
    const { mail_user, code } = req.body;
    const wrongCode = await codeValidation(mail_user, code, req);
    if (wrongCode) return res.json(wrongCode).end();

    return next();
  } catch (err) {
    console.error(err);
    res.status(404).end();
  }
}
export async function RectorCode(req, res, next) {
  try {
    const { id_universidad, code } = req.body;
    const { correo_universidad } = (
      await selectFromUniversidades(
        "correo_universidad",
        "id_universidad" + " = " + "'" + id_universidad + "'"
      )
    )[0];
    const wrongCode = await codeValidation(correo_universidad, code, req);
    if (wrongCode) return res.json(wrongCode).end();

    return next();
  } catch (err) {
    console.error(err);
    res.status(404).end();
  }
}
