import jwt from "jsonwebtoken";
import { jwtConfig } from "../config.js";
import * as consult from "../database/consults.js";
export const whoIs = async (req, res) => {
  try {
    //const token = req.headers["x-access-token"];
    //const token = req.headers.authorization.split(" ")[1];
    const { token } = req.body;

    const decoded = jwt.verify(token, jwtConfig.SECRET);

    //Consultar por decodedToken.id en la Tabla de Ingresantes
    const user_data = await consult.selectFromUsuarios(
      "*",
      "id_usuario",
      decoded.id[0].id_usuario
    );
    if (user_data.length === 0) {
      res.statusMessage = "La cuenta fue borrada de la base de datos";
      return res.status(401).json({ user: "noAuthenticated" }).end();
    }
    if (typeof user_data[0].title !== "undefined") {
      return res.json({ user: "entrant" }).end();
    }
    if (typeof user_data[0].verificado !== "undefined") {
      return res.json({ user: "rector" }).end();
    }

    return res.status(401).json({ user: "noAuthenticated" }).end();
  } catch {
    return res.json({ user: "noAuthenticated" }).end();
  }
};
