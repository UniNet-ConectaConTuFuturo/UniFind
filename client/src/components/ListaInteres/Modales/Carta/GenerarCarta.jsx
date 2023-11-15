import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { Button, message } from "antd";
import "./FileUpload.css";

function GenerarCarta({ id_universidad }) {
  const { token } = useOutletContext();
  const [uploading, setUploading] = useState(false);

  async function handleUpload() {
    setUploading(true);
    try {
      await axios.post(
        "http://localhost:4000/api/generate",
        { id_universidad },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      message.success("Enviado");
    } catch {
      message.error("No se pudo mandar el archivo");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="generar flex flex-col">
      <p>Generar carta:</p>
      <Button
        className="form-btn bg-[#1677ff] hover:bg-transparent mt-4 self-center w-2/3"
        onClick={handleUpload}
        loading={uploading}
      >
        {uploading ? "Enviando" : "Generar Carta"}
      </Button>
    </div>
  );
}
GenerarCarta.propTypes = {
  id_universidad: PropTypes.number,
};

export default GenerarCarta;
