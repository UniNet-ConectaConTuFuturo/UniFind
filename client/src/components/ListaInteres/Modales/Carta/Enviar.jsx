import { useState } from "react";
import { post } from "../../../../api/api";
import { Button, message } from "antd";
import PropTypes from "prop-types";
//import axios from "axios";
import { useOutletContext } from "react-router-dom";

function Enviar({ disabled, fileList, setFileList, id_universidad }) {
  const [uploading, setUploading] = useState(false);
  const { token } = useOutletContext();
  async function handleUpload() {
    setUploading(true);
    try {
      /* await axios.post(
        "http://localhost:4000/api/upload",
        { file: fileList[0], id_universidad },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      ); */
      await post(
        "/upload",
        { file: fileList[0] , id_universidad },
        {
          "Content-Type": "multipart/form-data",
        }
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
Enviar.propTypes = {
  disabled: PropTypes.bool,
  fileList: PropTypes.array,
  setFileList: PropTypes.func,
  id_universidad: PropTypes.number,
};
export default Enviar;
