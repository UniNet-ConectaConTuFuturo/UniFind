import { post } from "../../../../api/api";

export default async function cambiarEstado(estado, id_usuario) {
  try {
    await post(`/cambio/${estado}`, { id_usuario });
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}
