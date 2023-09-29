import { useContext } from "react";
import GeoJsonContext from "../context/Mapa/GeoJSON/GeoJsonContext";
export default function useGeoJson() {
  const context = useContext(GeoJsonContext);
  if (!context) throw Error("useGeoJson must be used within a GeoJsonProvider");
  return context;
}
