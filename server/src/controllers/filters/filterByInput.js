import { selectFromUniversidades } from "../../database/consults/universidadesC.js";
import { selectFromCarreras } from "../../database/consults/carrerasC.js";

export async function getNames(req, res) {
  try {
    const { inputValue } = req.body;
    const data = await selectFromUniversidades(
      "id_universidad, nombre_universidad, acronimo",
      "nombre_universidad LIKE '%" +
        inputValue +
        "%' OR acronimo LIKE '%" +
        inputValue +
        "%'"
    );
    const regComaWithoutY = /,.+?!y/;
    const resp = data.map((d) => {
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
    if (
      "Universidad de Buenos Aires (UBA)"
        .toLowerCase()
        .includes(inputValue.trim().toLowerCase())
    )
      resp.push({
        value: "UBA",
        label: "Universidad de Buenos Aires (UBA)",
        selectedOption: "UBA",
        title: "Universidad de Buenos Aires",
      });
    if (
      "Universidad Tecnologica Nacional (UTN)"
        .toLowerCase()
        .includes(inputValue.trim().toLowerCase())
    )
      resp.push({
        value: "UTN",
        label: "Universidad Tecnologica Nacional (UTN)",
        selectedOption: "UTN",
        title: "Universidad Tecnologica Nacional",
      });

    return res
      .send(
        resp.sort(function (a, b) {
          if (inputValue)
            switch (inputValue.toLowerCase()) {
              case a.label.toLowerCase():
              case a.selectedOption.toLowerCase():
              case a.title.toLowerCase():
                return -1;
              default:
                break;
            }
          if (a.label > b.label) {
            return 1;
          }
          if (
            a.label < b.label &&
            (!inputValue || inputValue.toLowerCase() === b.label.toLowerCase())
          ) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
      )
      .end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
export async function getCarreras(req, res) {
  try {
    const { inputValue } = req.body;
    const data = await selectFromCarreras(
      "id_carrera, nombre_carrera",
      "nombre_carrera LIKE '%" + inputValue + "%' ORDER BY nombre_carrera ASC"
    );
    const resp = data.map((d) => ({
      value: d.id_carrera,
      label: d.nombre_carrera,
    }));
    return res
      .send(
        resp.sort(function (a, b) {
          if (inputValue.toLowerCase() === a.label.toLowerCase()) {
            return -1;
          }
          return 0;
        })
      )
      .end();
  } catch (error) {
    console.error(error);
    res.statusMessage = "Ocurrio un error";
    res.status(404).end();
  }
}
