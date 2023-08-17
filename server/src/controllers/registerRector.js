import * as consult from "../database/consults.js";
import sendMail from "../libs/sendMail.js";
import * as math from "../libs/math_functions.js";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config.js";
import { InsertOrUpdateCode } from "../libs/CodeFunctions.js";

export async function RectorFirstStep(req, res) {
  try {
    const data = req.body;

    //Generación de codigo aleatorio
    let code = math.getRandomIntInclusive(100000, 999999);
    //Consulta a la base de datos para obtener el mail de la universidad
    const { correo_universidad } = (
      await consult.selectFromUniversidades(
        "correo_universidad",
        "id_universidad" + " = " + data.id_universidad
      )
    )[0];
    //Envio a mail
    const params = {
      code,
      name: data.name_user,
      email: correo_universidad,
    };
    //await sendMail(params);

    /* Guardar Codigo temporal */
    InsertOrUpdateCode(correo_universidad, code, res);

    /* Continue */
    req.session.attempts = 0;
    return res.status(200).json({ success: true }).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function RectorSecondStep(req, res) {
  try {
    const data = req.body;
    const { correo_universidad } = (
      await consult.selectFromUniversidades(
        "correo_universidad",
        "id_universidad" + " = " + data.id_universidad
      )
    )[0];

    //Eliminar Codigo ya usado
    await consult.DeleteVerCode(correo_universidad);
    delete req.session.attempts;

    //crear registro del Rector y devolver el id;
    await consult.setRector(data);
    const user_id = await consult.selectFromUsuarios(
      "id_usuario",
      "mail_user" + " = " + "'" + data.mail_user + "'"
    );

    //Guardar id en Token
    const token = jwt.sign({ id: user_id }, jwtConfig.SECRET, jwtConfig.params);

    //Responder Token
    return res.json({ token }).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
