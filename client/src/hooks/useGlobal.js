import { useContext } from "react";
import { GlobalContext } from "../context/Global/GlobalContext";
export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) throw Error("useGlobal must be used within a GlobalProvider");
  return context;
}
