import { updateUser } from "../../database/consults/usuariosC.js";
import jwt from "jsonwebtoken";
export async function handleFormSubmit(req, res) {
  try {
    const {
      form
    } = req.body;
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      if (!form.name_user.trim()) delete form.Name;
      if (!form.phoneNumber.trim()) delete form.phoneNumber;
      if (!form.address.trim()) delete form.address;

      await updateUser(form, decoded.id_usuario);

      console.log("Actualización exitosa!");
      return res.status(200).json({ success: true }).end();
    });
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}
