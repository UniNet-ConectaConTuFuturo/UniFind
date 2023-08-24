import * as consult from "../database/consults.js";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config.js";

export async function isFavorite(req, res) {
  try {
    const { token, id_universidad } = req.body;
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const { id } = decoded;
      console.log(id);

      if (
        typeof (
          await consult.selectFromFavoritas(
            "id_usuario",
            "id_usuario = " + id + " AND id_universidad = " + id_universidad
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
    const { token, id_universidad } = req.body;
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const { id } = decoded;
      console.log(id);
      await consult.insertFavorita({ id_usuario: id, id_universidad });
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
    const { token, id_universidad } = req.body;
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const { id } = decoded;
      console.log(id);

      await consult.DeleteFavorita({ id_usuario: id, id_universidad });
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
    const { token } = req.body;
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const { id } = decoded;
      console.log(id);

      const data =
          await consult.selectFromUniversidades(
            "id_universidad",
            "id_universidad IN (SELECT id_universidad FROM favoritas WHERE id_usuario = " + id + ")"
          )
      console.log(data);
      return res.json(data).end();
    });
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}