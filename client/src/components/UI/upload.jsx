import React from 'react'
import axios from 'axios';
import { useState } from 'react';
 
function FileUpload({idUniversidad, jwt}){

      const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
      //console.log(universidad);
 
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("idUniversidad", idUniversidad);
        try {
          const res = await axios.post(
            "http://localhost:4000/api/upload",
            formData,
            {
              headers: {
                Authorization: `Bearer ${jwt}`
              }
            }
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
    }
      return (
        <div className="App">
          <input type="file" onChange={saveFile} />
          <br />
          <button onClick={uploadFile}>Upload</button>
        </div>
      );
}
 
export default FileUpload;