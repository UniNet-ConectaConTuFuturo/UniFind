import { wrongData } from "../libs/validations.js";
import * as consult from "../database/consults.js";
export async function validateEntrant(req, res, next) {
  try {
    const data = req.body;
    /* Validar Formato */
    const wrongdata = wrongData(data);
    if (wrongdata) return res.json(wrongdata).end();

    /* Comprobar que no Exista */
    const user_data = await consult.selectFromUsuarios(
      "id_usuario",
      "mail_user",
      data.mail_user
    );
    if (user_data.length)
      return res.json({ spanEmail: "Este usuario ya está registrado" }).end();

    next();
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}
export async function ValidateEntrantCode(req, res, next) {
  try {
    const data = req.body;

    //Ver codigo temporal de la Base de Datos
    const { user_code } = (await consult.selectFromVerCode(data))[0];
    console.log(data.code, user_code);
    if (parseInt(data.code) !== user_code)
      return res.json({ spanCode: "Código Erróneo" }).end();

    return next();
  } catch (err) {
    console.error(err);
  }
}
