import {
  setEntrant,
  selectFromUsuarios,
} from "../../database/consults/usuariosC.js";
import { DeleteVerCode } from "../../database/consults/verificationCodeC.js";
import sendMail from "../../libs/sendMail.js";
import * as math from "../../libs/math_functions.js";
import jwt from "jsonwebtoken";
import { InsertOrUpdateCode } from "../../libs/CodeFunctions.js";

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
    //await sendMail(params, "template_al6t6fo");
    
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
    await DeleteVerCode(data.mail_user);
    delete req.session.attempts;

    //crear registro del Entrante y devolver el id;
    await setEntrant(data);
    const { id_usuario } = (
      await selectFromUsuarios(
        "id_usuario",
        "mail_user" + " = " + "'" + data.mail_user + "'"
      )
    )[0];

    //Guardar id en Token
    const token = jwt.sign(
      { id_usuario },
      process.env.SECRET,
      JSON.parse(process.env.JWTPARAMS)
    );

    //Responder Token
    return res.json({ token }).end();
  } catch (err) {
    console.error(err);
  }
}
