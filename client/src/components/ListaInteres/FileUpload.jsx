import axios from "axios";
import { useState } from "react";
import { useGlobal } from "../../hooks/useGlobal";
import PropTypes from "prop-types";

function FileUpload({ id_universidad }) {
  const token = useGlobal();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  //console.log(universidad);

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("idUniversidad", id_universidad);
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
  };
  return (
    <>
      <h2 className="">
        <b>Seleccione el formato de Carta</b>
      </h2>
      <h3>Adjuntar carta:</h3>
      <div className="app">
        <div className="App">
          <input type="file" onChange={saveFile} />
          <br />
          <button onClick={uploadFile}>Upload</button>
        </div>
      </div>
      <br />
      <br />
      <h3>Generar carta:</h3>
      <button className="w-40 h-7 bg-black text-white">BOTÓN</button>
    </>
  );
}
FileUpload.propTypes = {
  id_universidad: PropTypes.number,
};
export default FileUpload;
