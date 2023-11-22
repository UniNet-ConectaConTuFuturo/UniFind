import { selectFromUniversidades } from "../database/consults/universidadesC.js";
import { selectNombreFromCarrerasByUniversidad } from "../database/consults/carrerasC.js";
import { selectFromUsuarios } from "../database/consults/usuariosC.js";

export async function uni(req, res) {
  try {
    const { id_universidad } = req.body;
    const data = await selectFromUniversidades(
      "nombre_universidad, direccion_universidad, maps_universidad, localidad_universidad, web_universidad, gestion_universidad, zona_universidad, correo_universidad, ST_GeomFromText(ASTEXT(point)) as Point",
      "id_universidad = " + id_universidad
    );
    return res.json(data[0]).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function carreras(req, res) {
  try {
    const { id_universidad } = req.body;
    const data = await selectNombreFromCarrerasByUniversidad(id_universidad);
    return res.json(data).end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}

export async function publicUser(req, res) {
  const { id_usuario } = req.body;
  try {
    return res
      .json((await selectFromUsuarios("*", `id_usuario = ${id_usuario}`))[0])
      .end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
