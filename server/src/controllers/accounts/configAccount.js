import { updateUser } from "../../database/consults/usuariosC.js";
import jwt from "jsonwebtoken";
export async function handleFormSubmit(req, res) {
  try {
    const { form } = req.body;
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      for (const attribute in form) {
        if (typeof form[attribute] === "string") {
          if (!form[attribute].trim()) return res.status(406).end()
        } else {
          if (!form[attribute]) return res.status(406).end()
        }
      }
      await updateUser(form, decoded.id_usuario);

      console.log("Configuración exitosa!");
      return res.status(200).json({ success: true }).end();
    });
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}
