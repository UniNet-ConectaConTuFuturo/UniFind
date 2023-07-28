import { useContext } from "react";
import { MarkersContext } from "./MarkersContext";
export function useMarkers() {
  const context = useContext(MarkersContext);
  if (!context) throw Error("useMarkers must be used within a MarkersProvider");
  return context;
}
