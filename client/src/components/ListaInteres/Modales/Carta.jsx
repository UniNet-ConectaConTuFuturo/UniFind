import PropTypes from "prop-types";
import "./FileUpload.css";
import FileUpload from "./Carta/FileUpload";
import GenerarCarta from "./Carta/GenerarCarta";

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
