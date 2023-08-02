import { useContext } from "react";
import { IngresanteContext } from "./IngresanteContext";
export function useIngresante() {
  const context = useContext(IngresanteContext);
  if (!context)
    throw Error("useIngresante must be used within a IngresanteProvider");
  return context;
}
