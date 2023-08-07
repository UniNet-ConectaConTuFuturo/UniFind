import { useEffect, useState } from "react";
import { useMarkers } from "../../../../context/Markers/useMarkers";

function Gestion() {
  const { gestion, setGestion } = useMarkers();
  const [display, setDisplay] = useState(false);
  const [checked, setChecked] = useState([false, false]);
  useEffect(() => {
    switch (gestion) {
      case null:
        setChecked([false, false]);
        break;
      case "Público":
        setChecked([false, true]);
        break;
      case "Privado":
        setChecked([true, false]);
        break;
    }
  }, [gestion]);
  function handleClick(e) {
    if (e.target.value === gestion) {
      setGestion(null);
      setChecked([false, false]);
    } else {
      setGestion(e.target.value);
      //e.target.id == 0 ? setChecked([true, false]) : setChecked([false, true]);
    }
  }
  return (
    <section className="relative w-1/3 mt-1 mx-4">
      <h3>Filtrar por Gestion</h3>
      <label onMouseLeave={() => setDisplay(false)}>
        <span>
          <input
            name="input"
            className="w-full break-words text-xs border border-black"
            type="search"
            onMouseOver={() => setDisplay(true)}
            readOnly
          />

          {display && (
            <div className="w-full break-words absolute bg-white zIndex-1000">
              <label className="border border-black">
                <div className="flex">
                  <input
                    onClick={handleClick}
                    type="radio"
                    name="gestion"
                    value="Privado"
                    checked={checked[0]}
                    readOnly
                  />
                  <span className="mx-auto">Privado</span>
                </div>
              </label>
              <label>
                <div className="flex border border-black">
                  <input
                    onClick={handleClick}
                    type="radio"
                    name="gestion"
                    value="Público"
                    checked={checked[1]}
                    readOnly
                  />
                  <span className="mx-auto">Público</span>
                </div>
              </label>
            </div>
          )}
        </span>
      </label>
    </section>
  );
}
export default Gestion;
