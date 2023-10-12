import { useMapa } from "../../../../hooks/useMapa";

function AutoZoom() {
  const { autoZoom } = useMapa();
  return (
    <>
      <label htmlFor="autoZoom">Zoom Automático</label>
      <input
        type="checkbox"
        id="autoZoom"
        onChange={(e) => (autoZoom.current = e.target.checked)}
      />
    </>
  );
}

export default AutoZoom;
