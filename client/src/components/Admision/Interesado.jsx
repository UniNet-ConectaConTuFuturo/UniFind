import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { get } from "../../api/api";

function Interesado({
  id_usuario,
  setCartaName,
  setButtonPopUpExamen,
  nombreSoli,
}) {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    if (id_usuario)
      (async () => setUsuario(await get("/get/user", { id_usuario })))();
  }, [id_usuario]);

  return (
    <article className="mb-4 border-y border-slate-800">
      <h6>{usuario.name_user}</h6>
      <h6>mail: {usuario.mail_user}</h6>
      <h6>telefono: {usuario.tel_user}</h6>
      <h6>titulo: {usuario.titulo}</h6>

      <button
        onClick={() => {
          setCartaName(nombreSoli);
          setButtonPopUpExamen(true);
        }}
      >
        Ver Solicitud
      </button>
    </article>
  );
}
//nombre, titulo, mail, telefono, btn rechazar, btn aceptar, btn/input ver carta / descarga
export default Interesado;
