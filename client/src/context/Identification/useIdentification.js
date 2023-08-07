import { useContext } from "react";
import { IdentificationContext } from "./IdentificationContext";
export function useIdentification() {
  const context = useContext(IdentificationContext);
  if (!context)
    throw Error("useIdentification must be used within a IdentificationProvider");
  return context;
}
