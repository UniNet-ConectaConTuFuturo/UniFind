import { useMapa } from "../../../../hooks/useMapa";

function MarkersDistance() {
  const { setDistanciaMarcadores } = useMapa();

  return (
    <>
      <label htmlFor="distancia">Distancia marcadores:</label>
      <input
        type="range"
        name="distancia"
        id="distancia"
        defaultValue={10}
        min={0}
        max={15}
        step={1}
        onChange={(e) => setDistanciaMarcadores(e.target.value)}
      />
    </>
  );
}

export default MarkersDistance;
