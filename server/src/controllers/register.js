import * as consult from "../database/consults.js";
import sendMail from "../libs/sendMail.js";
import * as math from "../libs/math_functions.js";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config.js";

//import { serialize } from "cookie";

export async function singupEntrant(req, res) {
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
    await sendMail(params);
    console.log("Enviado");

    /* Guardar Codigo temporal */
    const mail_user = data.mail_user;
    const user_code = code;
    if (await consult.selectFromVerCode(mail_user)[0])
      await consult.UpdateVerCode(user_code, mail_user); //actualiza
    else await consult.insertCode(user_code, mail_user); //inserta

    /* Continue */
    return res.status(200).json({ success: true }).end();
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}

export async function singupEntrantCode(req, res) {
  try {
    const data = req.body;
    //Eliminar Codigo ya usado
    await consult.DeleteVerCode(data.mail_user);
    //crear registro del Entrante y devolver el id;
    await consult.setEntrant(data);
    const user_id = await consult.selectFromUsuarios(
      "id_usuario",
      "mail_user",
      data.mail_user
    );
    //Guardar id en Token
    const token = jwt.sign({ id: user_id }, jwtConfig.SECRET, jwtConfig.params);
    //Responder Token
    return res.json({ success: true }).end();
  } catch (err) {
    console.error(err);
  }
}

export async function getUniversities(req, res) {
  return res
    .json(
      await consult.selectFromUniversidades(
        "id_universidad, nombre_universidad",
        1
      )
    )
    .end();
}

export async function singupRector(req, res) {
  try {
    const data = req.body;

    /* Envio Mail */
    console.log("Usuario nuevo");
    let code = math.getRandomIntInclusive(100000, 999999);
    //Consulta a la base de datos para obtener el mail de la universidad
    const mail_universidad = await consult.selectFromUniversidades(
      "correo_universidad",
      data.title.id_universidad
    );
    //Envio a mail
    const params = {
      code,
      name: data.name_user,
      email: mail_universidad,
    };
    await sendMail(params);
    console.log("Enviado");

    /* Guardar Codigo temporal */
    //insertar a VerificationCode el data.mail_user y el code
    await consult.insertCode(params);

    /* Continue */
    return res.json("success");
    req.session.data = data;
    return res.redirect("/registro/code");
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function singupCodeRector(req, res) {
  const data = req.body;
  const mail_universidad = await consult.selectFromUniversidades(
    "correo_universidad",
    data.title.id_universidad
  );
  //Consulta para saber el code del data.mail_user
  const code = await consult.selectFromVerCode(mail_universidad);

  if (parseInt(data.code) !== code) {
    return res.json({ spanCode: "Código Erróneo" });
  }
  //El codigo esta correcto

  //crear registro del Entrante y devolver el id;
  await consult.setRector(req.session.data);
  const user_id = await consult.selectFromUsuarios(
    "id_usuario",
    req.session.data.mail_user
  );
  //Guardar id en Token
  const token = jwt.sign({ id: user_id }, jwtConfig.SECRET, jwtConfig.params);
  //Guardar Token en Cookie
  return res.json("login succesfully");
}
