import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { get } from "../../../../api/api";
import { Descriptions, List } from "antd";
import { useAdmision } from "../../../../hooks/useContexts";
const getDescriptionItems = (usuario) => {
  const items = [
    { label: "Correo", children: usuario.mail_user, span: 1 },
    { label: "Telefono", children: usuario.tel_user, span: 1 },
  ];
  if (usuario.title)
    items.push({ label: "Titulo", children: usuario.title, span: 1 });
  return items;
};
function Interesado({ id_usuario }) {
  const { refButtonVerSolicitud, setIdToShow, setPopUpExamen } = useAdmision();
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    if (id_usuario)
      (async () => setUsuario(await get("/get/user", { id_usuario })))();
  }, [id_usuario]);

  const items = getDescriptionItems(usuario);

  return (
    <List.Item
      extra={
        <button
          className="w-28 border rounded-md border-black p-2 text-center"
          ref={refButtonVerSolicitud}
          onClick={() => {
            setIdToShow(id_usuario);
            setPopUpExamen(true);
          }}
        >
          Ver Solicitud
        </button>
      }
    >
      <List.Item.Meta
        title={<h3 className="text-xl font-bold">{usuario.name_user}</h3>}
        description={<Descriptions size="small" items={items} />}
      />
    </List.Item>
  );
}
Interesado.propTypes = {
  id_usuario: PropTypes.number,
};
export default Interesado;
