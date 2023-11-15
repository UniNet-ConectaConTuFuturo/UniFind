import {
  selectFromFavoritas,
  insertFavorita,
  DeleteFavorita,
} from "../database/consults/favoritasC.js";
import jwt from "jsonwebtoken";

export async function isFavorite(req, res) {
  try {
    const { id_universidad } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;

      if (
        typeof (
          await selectFromFavoritas(
            "id_usuario",
            "id_usuario = " + decoded.id_usuario + " AND id_universidad = " + id_universidad
          )
        )[0] !== "undefined"
      ) {
        return res.json({ value: true }).end();
      } else {
        return res.json({ value: false }).end();
      }
    });
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function setFavorite(req, res) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { id_universidad } = req.body;
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      await insertFavorita({ id_usuario: decoded.id_usuario, id_universidad });
      return res.json({ value: true }).end();
    });
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function deleteFavorite(req, res) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { id_universidad } = req.body;
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;

      await DeleteFavorita({ id_usuario: decoded.id_usuario, id_universidad });
      return res.json({ value: true }).end();
    });
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function getFavorites(req, res) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;

      const data = await selectFromFavoritas(
        "id_universidad",
        "id_usuario = " + decoded.id_usuario
      );
      return res.json(data).end();
    });
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
