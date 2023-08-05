import json from "./markers.json";
export default function setAside(setUniToDisplay, id) {
  setUniToDisplay(json.filter((u) => u.id_universidad == id)[0]);
}
