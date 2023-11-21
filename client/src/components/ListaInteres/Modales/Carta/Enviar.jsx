import { useState } from "react";
import { post } from "../../../../api/api";
import { Button, message } from "antd";

function Enviar({ disabled, fileList, setFileList, id_universidad }) {
  const [uploading, setUploading] = useState(false);
  async function handleUpload() {
    setUploading(true);
    try {
      await post(
        "upload",
        { file: fileList[0], id_universidad },
        { "Content-Type": "multipart/form-data" }
      );
      setFileList([]);
      message.success("Enviado");
      window.location.reload();
    } catch {
      message.error("No se pudo mandar el archivo");
    } finally {
      setUploading(false);
    }
  }
  return (
    <Button
      className="w-full"
      onClick={handleUpload}
      disabled={disabled}
      loading={uploading}
      style={{ marginTop: 16 }}
    >
      {uploading ? "Enviando" : "Enviar"}
    </Button>
  );
}

export default Enviar;
