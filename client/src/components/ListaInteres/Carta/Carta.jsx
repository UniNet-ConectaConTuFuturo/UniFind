import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { Button, Form, message } from "antd";
import "./FileUpload.css";
import FileUpload from "./FileUpload";
import GenerarCarta from "./GenerarCarta";

function Carta({ id_universidad }) {
  return (
    <>
        <h2 className="text-black block text-center text-xl">
          Seleccione el formato de Carta
        </h2>
        <div className="structure grid grid-cols-2 gap-10">
          <FileUpload id_universidad={id_universidad} />
          <GenerarCarta id_universidad={id_universidad} />
        </div>
    </>
  );
}
Carta.propTypes = {
  id_universidad: PropTypes.number,
};

export default Carta;
