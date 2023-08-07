export function filterCarreras(selectCarreras, setCarreras, carreras) {
  const value = selectCarreras.current.value;
  if (value !== "") setCarreras([...carreras, value]);
  selectCarreras.current.value = "";
}
export function filterGestion(setGestion, selectGestion) {
  setGestion(selectGestion.current.value);
}
