import json from "./markers.json";
export default function setMarkersWithFilters(setMarkers, nombres, gestion) {
  setMarkers(
    json.filter(
      (u) =>
        (nombres.length > 0
          ? nombres.some((n) => n === u.nombre_universidad)
          : true) &&
        (gestion === "0" ? true : gestion === u.gestion_universidad)
    )
  );
}
