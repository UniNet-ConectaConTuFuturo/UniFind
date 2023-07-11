import { wrongData, wrongMail } from "../libs/validations.js";
import * as consult from "../database/consults.js";
export async function validateEntrant(req, res, next) {
  try {
    const data = req.body;
    /* Validar Mail */
    const wrongmail = wrongMail(data);
    if (wrongmail) return res.json(wrongmail).end();
    /* Comprobar que no Exista */
    const user_data = await consult.selectFromUsuarios(
      "id_usuario",
      "mail_user",
      data.mail_user
    );
    if (user_data.length)
      return res.json({ spanEmail: "Este usuario ya está registrado" }).end();
    /* Validar Formato */
    const wrongdata = wrongData(data);
    if (wrongdata) return res.json(wrongdata).end();

    next();
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}
export async function validateEntrantCode(req, res, next) {
  try {
    const data = req.body;

    //Ver codigo temporal de la Base de Datos
    const consulta = (await consult.selectFromVerCode(data))[0];
    if (!consulta)
      return res
        .status(404)
        .send({ error: "El código no se encuentra en la Base de Datos" })
        .end();

    const { user_code } = consulta;
    console.log(data.code, user_code);
    if (parseInt(data.code) !== user_code)
      return res.json({ spanCode: "Código Erróneo" }).end();

    return next();
  } catch (err) {
    console.error(err);
  }
}
