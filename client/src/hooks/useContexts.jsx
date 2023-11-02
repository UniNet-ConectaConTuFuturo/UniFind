import { useContext } from "react";

import { AdmisionContext } from "../context/AdmisionContext";
export function useAdmision() {
  const context = useContext(AdmisionContext);
  if (!context) throw Error("useAdmision must be used within a AdmisionProvider");
  return context;
}

import {GeoJsonContext} from "../context/GeoJsonContext";
export function useGeoJson() {
  const context = useContext(GeoJsonContext);
  if (!context) throw Error("useGeoJson must be used within a GeoJsonProvider");
  return context;
}

import { ListaContext } from "../context/ListaContext";
export function useLista() {
  const context = useContext(ListaContext);
  if (!context) throw Error("useLista must be used within a GlobalProvider");
  return context;
}

import { MapaContext } from "../context/MapaContext";
export function useMapa() {
  const context = useContext(MapaContext);
  if (!context) throw Error("useMapa must be used within a MapaProvider");
  return context;
}

