import * as consult from "../../database/consults.js";
import { jwtConfig } from "../../config.js";
import jwt from "jsonwebtoken";
import { mailValidation } from "../../libs/SimpleDataValidation.js";

export async function SignIn(req, res) {
  try {
    const data = req.body;
    const userData = await consult.selectFromUsuarios(
      "*",
      "mail_user",
      data.mail_user
    );
    const wrongmail = mailValidation(data);
    if (wrongmail) return res.json(wrongmail).end();
    if (!userData.length)
      return res
        .json({ spanEmail: "Este usuario no se encuentra registrado" })
        .end();

    if (userData[0].password_user === data.password_user) {
      //Guardar id en Token
      const token = jwt.sign(
        { id: userData.user_id },
        jwtConfig.SECRET,
        jwtConfig.params
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
