import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, message, Upload } from "antd";
import "./FileUpload.css";

function FileUpload({ id_universidad }) {
  const { token } = useOutletContext();
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  async function handleUpload() {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });
    formData.append("id_universidad", id_universidad);
    setUploading(true);
    console.log(formData);
    try {
      await axios.post("http://localhost:4000/api/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFileList([]);
      message.success("Enviado");
    } catch {
      message.error("No se pudo mandar el archivo");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="adjuntar item-grid flex flex-col">
      <p>Subir carta:</p>
      <Upload className="self-center"
        onRemove={(file) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          setFileList(newFileList);
        }}
        onChange={(info) => {
          let newFileList = [...info.fileList];
          // 1. Limit the number of uploaded files
          newFileList = newFileList.slice(-1);
          // 2. Read from response and show file link
          newFileList = newFileList.map((file) => {
            if (file.response) file.url = file.response.url;
            return file;
          });
          setFileList(newFileList);
        }}
        beforeUpload={(file) => {
          setFileList([...fileList, file]);

          return false;
        }}
        fileList={fileList}
      >
        <Button icon={<UploadOutlined />}>Seleccionar Archivo (.txt)</Button>
      </Upload>
      <Button className="w-2/3 self-center"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Uploading" : "Start Upload"}
      </Button>
    </div>
  );
}
FileUpload.propTypes = {
  id_universidad: PropTypes.number,
};

export default FileUpload;
