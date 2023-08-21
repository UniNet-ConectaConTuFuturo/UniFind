import { useContext } from "react";
import { MapaContext } from "../context/Mapa/MapaContext";
export function useMapa() {
  const context = useContext(MapaContext);
  if (!context) throw Error("useMapa must be used within a MapaProvider");
  return context;
}
