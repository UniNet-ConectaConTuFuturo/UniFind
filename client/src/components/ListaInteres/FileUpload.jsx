import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, message, Upload } from 'antd';
import "./FileUpload.css"

function FileUpload({ id_universidad }) {
  const { token } = useOutletContext();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("idUniversidad", id_universidad);
    if (!file) {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/generate",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
      } catch (ex) {
        console.log(ex);
      }
    } else {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/upload",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  const props = {
    beforeUpload: (file) => {
      const isTXT = file.type === 'text/plain';
      if (!isTXT) {
        message.error(`${file.name} no es un archivo .txt`);
      }
      return isTXT || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };

  return (
    <>
    <Form
      layout="vertical"
      onFinish={(values) => {
        console.log({ values })
      }}
      >
        <h2 className="text-black block text-center text-xl">
          <b>Seleccione el formato de Carta</b>
        </h2>
        <div className="structure grid grid-cols-2 gap-10">
          <div className="adjuntar item-grid">
            <Form.Item label="Adjuntar carta:" name={"AdjuntarCarta"} wrapperCol={{ offset: 4, span: 16 }} rules={[{
              required:"true",
              message:"Por favor subir la carta"
            }]}>
              <Upload {...props} type="file" customRequest={saveFile}>
                <Button icon={<UploadOutlined />}>Subir archivo .txt</Button>
              </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button className="form-btn bg-[#1677ff] hover:bg-transparent" htmlType="submit" customRequest={uploadFile}>Subir</Button>
            </Form.Item>
            {/* <h3 className="text-black block mb-2">Adjuntar carta:</h3>
            <input className="block" type="file" onChange={saveFile} /> 
            <button className="block" onClick={uploadFile}>Upload</button> */}
          </div>
          <div className="generar">
            <Form.Item label="Generar carta:" name={"GenerarCarta"} wrapperCol={{ offset: 4, span: 16 }} rules={[{
              required:"true",
            }]}>
              <Button className="form-btn bg-[#1677ff] hover:bg-transparent mt-4" customRequest={uploadFile}>Generar Carta</Button>
            </Form.Item>
            {/* <h3 className="text-black">Generar carta:</h3>
            <button className="text-black" onClick={uploadFile}>
              Generar Carta
            </button> */}
          </div>
        </div>
    </Form>
    </>
  );
}
FileUpload.propTypes = {
  id_universidad: PropTypes.number,
};

export default FileUpload;
