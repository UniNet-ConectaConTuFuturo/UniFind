import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { get } from "../../api/api";
import { Descriptions, List } from "antd";
function Interesado({
  id_usuario,
  setCartaName,
  setButtonPopUpExamen,
  nombreSoli,
}) {
  const [usuario, setUsuario] = useState({});
  const {refButtonVerSolicitud} = useLista()
  useEffect(() => {
    if (id_usuario)
      (async () => setUsuario(await get("/get/user", { id_usuario })))();
  }, [id_usuario]);
  const items = [
    { label: "Correo", children: usuario.mail_user, span: 1 },
    { label: "Telefono", children: usuario.tel_user, span: 1 },
  ];
  if (usuario.title)
    items.push({ label: "Titulo", children: usuario.title, span: 1 });
  return (
    <List.Item>
      <Descriptions
        size="small"
        title={usuario.name_user}
        items={items}
        extra={
          <button className="w-28 border rounded-md p-2 text-center"
            ref={refButtonVerSolicitud}
            onClick={() => {
              setCartaName({nombreSoli, id_usuario});
              setButtonPopUpExamen(true);
            }}
          >
            Ver Solicitud
          </button>
        }
      />
    </List.Item>
  );
}
//nombre, titulo, mail, telefono, btn rechazar, btn aceptar, btn/input ver carta / descarga
export default Interesado;
