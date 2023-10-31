import { useContext } from "react";
import { ListaContext } from "../components/ListaInteres/ListaContext";
export function useLista() {
  const context = useContext(ListaContext);
  if (!context) throw Error("useLista must be used within a GlobalProvider");
  return context;
}
