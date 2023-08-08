import * as consult from "../database/consults.js";
import sendMail from "../libs/sendMail.js";
import * as math from "../libs/math_functions.js";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config.js";
import { InsertOrUpdateCode } from "../libs/CodeFunctions.js";

//import { serialize } from "cookie";

export async function EntrantFirstStep(req, res) {
  try {
    const data = req.body;

    //Generación de codigo aleatorio
    let code = math.getRandomIntInclusive(100000, 999999);
    //Envio a mail
    const params = {
      code,
      name: data.name_user,
      email: data.mail_user,
    };
    //await sendMail(params);

    /* Guardar Codigo temporal */
    InsertOrUpdateCode(data.mail_user, code, res);

    /* Continue */
    req.session.attempts = 0;
    return res.status(200).json({ success: true }).end();
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}

export async function EntrantSecondStep(req, res) {
  try {
    const data = req.body;
    //Eliminar Codigo ya usado
    await consult.DeleteVerCode(data.mail_user);
    delete req.session.attempts;
    //crear registro del Entrante y devolver el id;
    await consult.setEntrant(data);
    const user_id = await consult.selectFromUsuarios(
      "id_usuario",
      "mail_user" + "=" + data.mail_user
    );
    //Guardar id en Token
    const token = jwt.sign({ id: user_id }, jwtConfig.SECRET, jwtConfig.params);
    //Responder Token
    return res.json({ token }).end();
  } catch (err) {
    console.error(err);
  }
}

export async function getUniversities(req, res) {
  try {
    return res
      .json(
        await consult.selectFromUniversidades(
          "id_universidad, nombre_universidad"
        )
      )
      .end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

export async function RectorFirstStep(req, res) {
  try {
    const data = req.body;

    /* Envio Mail */
    console.log("Usuario nuevo");
    let code = math.getRandomIntInclusive(100000, 999999);
    //Consulta a la base de datos para obtener el mail de la universidad
    const mail_universidad = await consult.selectFromUniversidades(
      "correo_universidad",
      "id_universidad" + "=" + data.id_universidad
    );
    console.log(mail_universidad);
    //Envio a mail
    const params = {
      code,
      name: data.name_user,
      email: mail_universidad,
    };
    //await sendMail(params);
    console.log("Enviado");

    /* Guardar Codigo temporal */
    InsertOrUpdateCode(mail_universidad, code, res);

    /* Continue */
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
    const mail_universidad = await consult.selectFromUniversidades(
      "correo_universidad",
      "id_universidad" + "=" + data.id_universidad
    );
    //Consulta para saber el code del data.mail_user
    const code = await consult.selectFromVerCode(mail_universidad);

    if (parseInt(data.code) !== code) {
      return res.json({ spanCode: "Código Erróneo" });
    }
    //El codigo esta correcto

    //crear registro del Rector y devolver el id;
    await consult.setRector(data);
    const user_id = await consult.selectFromUsuarios(
      "id_usuario",
      "mail_user" + "=" + data.mail_user
    );
    //Guardar id en Token
    const token = jwt.sign({ id: user_id }, jwtConfig.SECRET, jwtConfig.params);
    //Guardar Token en Cookie
    return res.json({ token }).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
