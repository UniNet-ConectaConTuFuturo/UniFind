export function formatNamesOptions(data) {
  const regComaWithoutY = /,.+?!y/;
  return data.map((d) => {
    const acronimo = d.acronimo ? " (" + d.acronimo + ")" : "";
    const insertAcronimo = (nombre_universidad) => {
      if (nombre_universidad.includes("-")) {
        return nombre_universidad.replace(" -", acronimo + " -");
      } else {
        if (regComaWithoutY.test(nombre_universidad)) {
          console.log(nombre_universidad);
          return nombre_universidad.replace(",", " " + acronimo + ",");
        }
        return d.nombre_universidad + acronimo;
      }
    };
    return {
      value: d.id_universidad,
      label: insertAcronimo(d.nombre_universidad),
      selectedOption: d.acronimo || "",
      title: d.nombre_universidad,
    };
  });
}
export function formatCarrerasOptions(data) {
  return data.map((d) => ({
    value: d.id_carrera,
    label: d.nombre_carrera,
  }));
}
