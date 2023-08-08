import { get } from "./api";
export function AllPoints() {
  return get("/mapa/allpoints");
}
