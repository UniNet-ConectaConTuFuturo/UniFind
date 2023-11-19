import "./info.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { get } from "../../../../api/api";
import { twMerge } from "tailwind-merge";
import { Tabs, Tooltip } from "antd";
import DatosUni from "./DatosUni";
import Fav from "./Fav";
import CarrerasUni from "./CarrerasUni";
import { useOutletContext } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import BtnFav from "./UI/BtnFav";

function Informacion({ id_universidad, dispatch, className }) {
  const [universidad, setUniversidad] = useState(null);
  const { token } = useOutletContext();
  useEffect(() => {
    (async () => setUniversidad(await get("/get/uni", { id_universidad })))();
  }, [id_universidad]);
  const iconColor = "#1677ff";
  return (
    <div
      className={twMerge(
        "text-black flex flex-col content-end h-[98%] px-2 overflow-y-clip ",
        className
      )}
    >
      {universidad && (
        <>
          <h2 className="text-2xl my-4 pl-1">
            {universidad.nombre_universidad}
          </h2>
          <Tabs
            prefixCls="h-full"
            defaultActiveKey="1"
            items={[
              {
                key: "1",
                label: "Información",
                children: (
                  <div className="h-full flex justify-between flex-col break-all">
                    <DatosUni universidad={universidad} iconColor={iconColor} />
                    {token ? (
                      <Fav
                        id_universidad={id_universidad}
                        dispatch={dispatch}
                        iconColor={iconColor}
                      />
                    ) : (
                      <Tooltip title="Debe iniciar sesión">
                        <div className="opacity-25">
                          <BtnFav
                            Icon={FaRegBookmark}
                            text="Guardar en favoritos"
                            disabled={true}
                            iconColor={iconColor}
                          />
                        </div>
                      </Tooltip>
                    )}
                  </div>
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
