import { useMarkers } from "../../context/Markers/useMarkers";
import json from "../../api/markers.json";
import { useEffect, useRef } from "react";
function Info() {
  const { displayInfo, uniToDisplay, setDisplayInfo } = useMarkers();
  const uni = useRef({});
  useEffect(
    () =>
      (uni.current = json.filter((u) => u.id_universidad == uniToDisplay)[0]),
    [uniToDisplay]
  );
  return (
    <>
      {displayInfo && (
        <div className="flex flex-col float-right fixed z-10 top-0 right-0 w-4/12 -mr-4 content-end h-screen m-0 bg-bg-sb_bg opacity-90 zIndex-1000">
          <button type="button" onClick={() => setDisplayInfo(false)}>
            Cerrar
          </button>
          {uni.current.nombre_universidad}
        </div>
      )}
    </>
  );
}

export default Info;
