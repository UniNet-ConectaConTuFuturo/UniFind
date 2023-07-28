import json from "../markers.json";
export default function setMarkersWithFilters(setMarkers, nombres, gestion) {
  setMarkers(
    json.filter(
      (u) =>
        nombres.every((n) => n === u.nombre_universidad) &&
        (gestion === "0" ? true : gestion === u.gestion_universidad)
    )
  );
  console.log(
    json.filter(
      (u) =>
        nombres.every((n) => n === u.nombre_universidad) &&
        (gestion == "0" ? true : gestion === u.gestion_universidad)
    )
  );
}
