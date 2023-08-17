import * as consult from "../database/consults.js";
export async function InsertOrUpdateCode(mail, code, res) {
  try {
    const consulta = await consult.selectFromVerCode(mail);
    if (consulta.length > 1) {
      await consult.DeleteVerCode(mail);
      return res
        .status(200)
        .json({ error: "codigos de mas en la base de datos" })
        .end();
    }
    if (consulta[0]) await consult.UpdateVerCode(code, mail); //actualiza
    else await consult.insertCode(code, mail); //inserta
    return;
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    return res.status(404).end();
  }
}
export async function codeValidation(mail, code, req) {
  try {
    //Ver codigo temporal de la Base de Datos
    const consulta = (await consult.selectFromVerCode(mail))[0];
    if (!consulta) {
      //El código no se encuentra en la Base de datos
      return { error: "Error: El código no se encuentra en la Base de datos" };
    }
    if (consulta.length > 1) {
      //Más de 1 código en la base de datos
      await consult.DeleteVerCode(mail);
      return { error: "Error: Más de 1 código en la base de datos" };
    }
    //Verificar intentos
    if (req.session.attempts === undefined)
      return { error: "Error: Vuelve a solicitar un código" };
    if (req.session.attempts >= 3)
      return {
        error: "Demasiados intentos: Vuelve a solicitar un código",
      };
    //Comparar Codigos
    const { user_code } = consulta;
    if (parseInt(code) !== user_code) {
      req.session.attempts++;
      return { error: "Código Erróneo" };
    }
  } catch (err) {
    console.error(err);
  }
}
