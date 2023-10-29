import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { get } from "../../api/api";
import {useOutletContext} from "react-router-dom"

function FileDownload({ id_universidad }) {
  const { token } = useOutletContext();
  const [downloadedFile, setDownloadedFile] = useState("");

  const downloadFile = async () => {
    const res = await axios.get(
      `http://localhost:4000/api/download?idUniversidad=${id_universidad}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob',
      }
    );

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'downloaded-file.txt');
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
  }
  return (<button className="boton descargar w-[20%]" onClick={downloadFile}>Descargar Carta</button>);
};

export default FileDownload;
