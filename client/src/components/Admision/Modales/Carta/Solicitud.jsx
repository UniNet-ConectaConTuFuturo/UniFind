import { post } from "../../../../api/api";
import FileDownload from "./FileDownload";
import { Modal } from "antd";
import { useAdmision } from "../../../../hooks/useContexts";
import { useEffect, useState } from "react";
import PreviewPDF from "./PreviewPDF";
import cambiarEstado from "./cambiarEstado";
function Solicitud() {
  const { userToShow, popUpExamen, setPopUpExamen } = useAdmision();
  const { id_usuario, name_user } = userToShow;
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (id_usuario) {
      (async () =>
        setFile(await (await post("/readfile", { id_usuario })).blob()))();
    }
  }, [id_usuario]);

  return (
    <Modal
      title={<span className="font-bold">Solicitud de {name_user}</span>}
      width="fit-content"
      centered
      open={popUpExamen}
      onCancel={() => setPopUpExamen(false)}
      footer={
        <div className="flex gap-4 justify-end font-semibold">
          <button className="py-1 px-2 bg-white bg-opacity-75 shadow-2xl shadow-black rounded-sm">
            <FileDownload file={file} />
          </button>
          <button
            className="py-1 px-2 bg-white bg-opacity-75 shadow-2xl shadow-black rounded-sm"
            onClick={() => cambiarEstado("pendiente", id_usuario)}
          >
            Pendiente
          </button>
          <button
            className="py-1 px-2 bg-white bg-opacity-75 shadow-2xl shadow-black rounded-sm"
            onClick={() => cambiarEstado("aceptada", id_usuario)}
          >
            Aceptar
          </button>
          <button
            className="py-1 px-2 bg-white bg-opacity-75 shadow-2xl shadow-black rounded-sm"
            onClick={() => cambiarEstado("rechazada", id_usuario)}
          >
            Rechazar
          </button>
          <button
            className="py-1 px-2 bg-white bg-opacity-75 shadow-2xl shadow-black rounded-sm"
            onClick={() => cambiarEstado("segunda_instancia", id_usuario)}
          >
            Segunda Instancia
          </button>
        </div>
      }
    >
      <PreviewPDF file={file} />
    </Modal>
  );
}
export default Solicitud;
