import { useContext } from "react";
import { AdmisionContext } from "../components/Admision/AdmisionContext";
export function useLista() {
  const context = useContext(AdmisionContext);
  if (!context) throw Error("useAdmision must be used within a GlobalProvider");
  return context;
}
