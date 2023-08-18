import * as consult from "../database/consults.js";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config.js";

export async function isFavorite(req, res) {
  try {
    const { token, id_universidad } = req.body;
    console.log(req.body);
    const { id } = jwt.verify(token, jwtConfig.SECRET);
    console.log(id);

    if (
      typeof (
        await consult.selectFromFavoritas(
          "*",
          "id_usuario = " + id + " AND id_universidad = " + id_universidad
        )
      )[0] !== "undefined"
    ) {
      return res.send(true).end();
    } else {
      return res.send(false).end();
    }
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function setFavorite(req, res) {
  try {
    const { token, id_universidad } = req.body;
    console.log(req.body);
    const { id } = jwt.verify(token, jwtConfig.SECRET);
    console.log(id);

    await consult.insertFavorita({ id_usuario: id, id_universidad });
    return res.status(204).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function deleteFavorite(req, res) {
  try {
    const { token, id_universidad } = req.body;
    console.log(req.body);
    const { id } = jwt.verify(token, jwtConfig.SECRET);
    console.log(id);

    await consult.DeleteFavorita({ id_usuario: id, id_universidad });
    return res.status(204).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
