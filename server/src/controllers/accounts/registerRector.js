import { selectFromUniversidades } from "../../database/consults/universidadesC.js";
import {
  setRector,
  selectFromUsuarios,
} from "../../database/consults/usuariosC.js";
import { DeleteVerCode } from "../../database/consults/verificationCodeC.js";
import sendMail from "../../libs/sendMail.js";
import * as math from "../../libs/math_functions.js";
import jwt from "jsonwebtoken";
import { InsertOrUpdateCode } from "../../libs/CodeFunctions.js";

export async function RectorFirstStep(req, res) {
  try {
    const data = req.body;

    //Generación de codigo aleatorio
    let code = math.getRandomIntInclusive(100000, 999999);
    //Consulta a la base de datos para obtener el mail de la universidad
    const { correo_universidad } = (
      await selectFromUniversidades(
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
      await selectFromUniversidades(
        "correo_universidad",
        "id_universidad" + " = " + data.id_universidad
      )
    )[0];

    //Eliminar Codigo ya usado
    await DeleteVerCode(correo_universidad);
    delete req.session.attempts;

    //crear registro del Rector y devolver el id;
    await setRector(data);
    const { id_usuario } = (
      await selectFromUsuarios(
        "id_usuario",
        "mail_user" + " = " + "'" + data.mail_user + "'"
      )
    )[0];

    //Guardar id en Token
    const token = jwt.sign(
      { id: id_usuario },
      process.env.SECRET,
      JSON.parse(process.env.JWTPARAMS)
    );

    //Responder Token
    return res.json({ token }).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
