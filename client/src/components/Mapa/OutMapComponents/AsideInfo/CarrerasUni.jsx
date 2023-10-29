import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { get } from "../../../../api/api";
import 'simplebar';
import 'simplebar/dist/simplebar.css';

function CarrerasUni({ id_universidad }) {
  const [carreras, setCarreras] = useState([]);
  useEffect(() => {
    (async () => {
      setCarreras(
        await get("/get/carreras", {
          id_universidad,
        })
      );
    })();
  }, [id_universidad]);
  return (
    <div data-simplebar className="carreras overflow-y-scroll no-scrollbar pl-1 max-h-96">
      {carreras.map((carrera, i) => {
        return <p key={i}>{carrera.nombre_carrera}</p>;
      })}
    </div>
  );
}
CarrerasUni.propTypes = {
  id_universidad: PropTypes.number,
};
export default CarrerasUni;
