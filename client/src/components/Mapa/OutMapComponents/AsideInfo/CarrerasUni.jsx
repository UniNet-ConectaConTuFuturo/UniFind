import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { get } from "../../../../api/api";

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
    <div className="carreras overflow-y-scroll mt-4 mb-4 pl-1 max-h-72">
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
