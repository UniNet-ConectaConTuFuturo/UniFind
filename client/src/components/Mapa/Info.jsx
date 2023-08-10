import { useEffect } from "react";
import { useMarkers } from "../../context/Markers/useMarkers";
function Info() {
  const { displayInfo, uniToDisplay, setDisplayInfo } = useMarkers();
  /* useEffect(() => {
    console.log(uniToDisplay);
  }, []); */
  return (
    <>
      {displayInfo && (
        <div className="flex flex-col float-right fixed z-10 top-0 right-0 w-4/12 -mr-4 content-end h-screen m-0 bg-bg-sb_bg opacity-90 zIndex-1000">
          <button type="button" onClick={() => setDisplayInfo(false)}>
            Cerrar
          </button>
          {/* {uniToDisplay.nombre_universidad} */}
        </div>
      )}
    </>
  );
}

export default Info;
