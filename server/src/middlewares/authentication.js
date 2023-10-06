import jwt from "jsonwebtoken";
import { selectFromUsuarios } from "../database/consults/usuariosC.js";
export const whoIs = (req, res) => {
  try {
    //const token = req.headers["x-access-token"];
    //const token = req.headers.authorization.split(" ")[1];
    const { token } = req.body;
    if (!token)
      return res.json({ user: "noAuthenticated" }).end();
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const { id } = decoded;

      //Consultar por decodedToken.id en la Tabla de Ingresantes
      const user_data = await selectFromUsuarios(
        "title, id_universidad",
        "id_usuario = " + id
      );

      if (user_data.length === 0) {
        res.statusMessage = "La cuenta fue borrada de la base de datos";
        return res.json({ user: "noAuthenticated" }).end();
      }
      if (user_data[0].title) {
        return res.json({ user: "entrant" }).end();
      }
      if (user_data[0].id_universidad) {
        return res.json({ user: "rector" }).end();
      }

      return res.json({ user: "noAuthenticated" }).end();
    });
  } catch (err) {
    return res.json({ user: "noAuthenticated" }).end();
  }
};
