import { useEffect } from "react";
import { useMarkers } from "../../context/Markers/useMarkers";
import { post } from "../../api/api"
import { useState } from "react";
function Info() {
  const { idUniToShowInfo, setIdUniToShowInfo } = useMarkers();
  const [universidad, setUniversidad] = useState({})
  const [carreras, setCarreras] = useState([])
  useEffect(() => {
    (async ()=>{
      console.log(idUniToShowInfo);
      if(idUniToShowInfo === 0) return;
      setUniversidad(await post("/get/uni", {id_universidad: idUniToShowInfo}))
      setCarreras(await post("/get/carreras"), {id_universidad: idUniToShowInfo})
    })()
  }, []); 
  return (
    <>
      {idUniToShowInfo !== 0 && (
        <div className="flex flex-col fixed z-10 top-0 right-2 w-4/12 -mr-4 content-end h-screen m-0 bg-shape bg-no-repeat zIndex-1000">
          <button className="" type="button" onClick={() => setIdUniToShowInfo(0)}>
            Cerrar
          </button>
          <div></div>
          {idUniToShowInfo}
          
        </div>
      )}
    </>
  );
}

export default Info;
