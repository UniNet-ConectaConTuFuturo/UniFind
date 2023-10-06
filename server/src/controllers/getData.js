import { selectFromUniversidades } from "../database/consults/universidadesC.js";
import { selectNombreFromCarrerasByUniversidad } from "../database/consults/carrerasC.js";
//import { selectSolicitudes } from "../database/consults/solicitudes.js";

export async function uni(req, res) {
  try {
    const { id_universidad } = req.body;
    const data = await selectFromUniversidades(
      "nombre_universidad, direccion_universidad, maps_universidad, localidad_universidad, web_universidad, gestion_universidad, zona_universidad, correo_universidad",
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

/*export function solicitudes(userID) {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT U.name_user, U.mail_user, S.solicitud
      FROM solicitudes S
      LEFT JOIN usuarios U ON U.id_usuario = S.id_usuario
      WHERE S.id_universidad = ?`,
      [userID],
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
}*/
