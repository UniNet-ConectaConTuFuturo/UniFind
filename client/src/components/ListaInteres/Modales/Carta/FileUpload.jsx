import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";

function FileUpload({ id_universidad }) {
  const { token } = useOutletContext();
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  async function handleUpload() {
    setUploading(true);
    try {
      await axios.post(
        "http://localhost:4000/api/upload",
        { file: fileList[0], id_universidad },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
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
    <>
      <Upload
        className="self-center"
        onRemove={() => setFileList([])}
        onChange={({ fileList }) => {
          // 1. Limit the number of uploaded files
          fileList = fileList.slice(-1);
          // 2. Read from response and show file link
          fileList = fileList.map((file) => {
            if (file.response) file.url = file.response.url;
            return file;
          });
          setFileList(fileList);
        }}
        beforeUpload={(file) => {
          setFileList([file]);
          return false;
        }}
        fileList={fileList}
      >
        <Button icon={<UploadOutlined />}>Seleccionar Archivo (.txt)</Button>
      </Upload>
      <Button
        className="w-2/3 self-center"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Enviando" : "Enviar"}
      </Button>
    </>
  );
}
FileUpload.propTypes = {
  id_universidad: PropTypes.number,
};

export default FileUpload;
