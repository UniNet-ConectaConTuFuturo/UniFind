import * as consult from "../../database/consults.js";
import { jwtConfig } from "../../config.js";
import jwt from "jsonwebtoken";
import { mailValidation } from "../../libs/SimpleDataValidation.js";

export async function SignIn(req, res) {
  try {
    const data = req.body;
    //Validar formato mail
    const wrongmail = mailValidation(data);
    if (wrongmail) return res.json(wrongmail).end();
    //Verificar si existe y recibir id_usuario y password_user
    const userData = await consult.selectFromUsuarios(
      "id_usuario, password_user",
      "mail_user = '" + data.mail_user + "'"
    );
    console.log(userData);
    if (!userData.length)
      return res
        .json({ spanEmail: "Este usuario no se encuentra registrado" })
        .end();

    const { id_usuario, password_user } = userData[0];

    if (password_user === data.password_user) {
      //Guardar id en Token
      console.log(process.env.SECRET, process.env.JWTPARAMS);
      const token = jwt.sign(
        { id: id_usuario },
        process.env.SECRET,
        JSON.parse(process.env.JWTPARAMS)
      );
      //Responder Token
      return res.json({ token }).end();
    } else
      return res.json({ spanPassword: "La contraseña es incorrecta" }).end();
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
}
