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
    const consulta = (await consult.selectFromVerCode(data.mail_user))[0];
    if (!consulta) {
      //El código no se encuentra en la Base de datos
      return res.json({ error: "Error: Vuelve a solicitar un código" }).end();
    }
    if (consulta.length > 1) {
      //Más de 1 código en la base de datos
      await consult.DeleteVerCode(data.mail_user);
      return res.json({ error: "Error: Vuelve a solicitar un código" }).end();
    }
    //Verificar intentos
    if (req.session.attempts === undefined)
      return res.json({ error: "Error: Vuelves a solicitar un código" }).end();
    if (req.session.attempts >= 3)
      return res
        .json({ error: "Demasiados intentos: Vuelve a solicitar un código" })
        .end();
    //Comparar Codigos
    const { user_code } = consulta;
    if (parseInt(data.code) !== user_code) {
      req.session.attempts++;
      return res.json({ error: "Código Erróneo" }).end();
    }

    return next();
  } catch (err) {
    console.error(err);
  }
}
