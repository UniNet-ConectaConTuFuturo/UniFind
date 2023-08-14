import { useEffect } from "react";
import { useMarkers } from "../../context/Markers/useMarkers";
function Info() {
  const { displayInfo, uniToDisplay, setDisplayInfo } = useMarkers();
  useEffect(() => {
    console.log(uniToDisplay);
  }, []); 
  return (
    <>
      {displayInfo && (
        <div className="flex flex-col fixed z-10 top-0 right-2 w-4/12 -mr-4 content-end h-screen m-0 bg-shape bg-no-repeat zIndex-1000">
          <button classname="" type="button" onClick={() => setDisplayInfo(false)}>
            Cerrar
          </button>
          <div></div>
          {/*{uniToDisplay_nombre_universidad}*/}
          
        </div>
      )}
    </>
  );
}

export default Info;
