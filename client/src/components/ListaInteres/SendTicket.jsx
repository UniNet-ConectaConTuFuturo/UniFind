import axios from "axios";
import { useState } from "react";
import PropTypes  from "prop-types";
import { useOutletContext } from "react-router-dom";

function SendTicket({ id_universidad }) {
    const { token } = useOutletContext();
    
    
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
