import "./info.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { get } from "../../../../api/api";
import { twMerge } from "tailwind-merge";
import { Tabs } from "antd";
import DatosUni from "./DatosUni";
import Fav from "./Fav";
import CarrerasUni from "./CarrerasUni";

function Informacion({ id_universidad, dispatch, className }) {
  const [universidad, setUniversidad] = useState(null);
  useEffect(() => {
    (async () => setUniversidad(await get("/get/uni", { id_universidad })))();
  }, [id_universidad]);
  return (
    <div
      className={twMerge(
        "text-black flex flex-col content-end h-full",
        className
      )}
    >
      {universidad && (
        <>
          <h2 className="text-2xl my-4 pl-1">
            {universidad.nombre_universidad}
          </h2>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: "1",
                label: "Información",
                children: (
                  <>
                    <DatosUni universidad={universidad} dispatch={dispatch} />
                    <Fav id_universidad={id_universidad} dispatch={dispatch} />
                  </>
                ),
              },
              {
                key: "2",
                label: "Grados y Pregrados",
                children: <CarrerasUni id_universidad={id_universidad} />,
              },
            ]}
          />
        </>
      )}
    </div>
  );
}
Informacion.propTypes = {
  id_universidad: PropTypes.number,
  dispatch: PropTypes.func,
  className: PropTypes.string,
};
export default Informacion;
