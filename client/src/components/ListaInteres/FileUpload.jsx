import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

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
  return (
    <>
      <h2 className="text-black">
        <b>Seleccione el formato de Carta</b>
      </h2>
      <h3 className="text-black">Adjuntar carta:</h3>
      <div className="app text-black">
        <div className="App">
          <input type="file" onChange={saveFile} />
          <br />
          <button onClick={uploadFile}>Upload</button>
        </div>
      </div>
      <br />
      <br />
      <h3 className="text-black">Generar carta:</h3>
      <button className="text-black" onClick={uploadFile}>
        BOTÓN
      </button>
    </>
  );
}
FileUpload.propTypes = {
  id_universidad: PropTypes.number,
};

export default FileUpload;
