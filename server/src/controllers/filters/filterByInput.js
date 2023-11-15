import { selectFromUniversidades } from "../../database/consults/universidadesC.js";
import { selectFromCarreras } from "../../database/consults/carrerasC.js";
import { formatCarrerasOptions, formatNamesOptions } from "./Format.js";

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
    const resp = formatNamesOptions(data);
    if (typeof inputValue ==="undefined" ||
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
    if (typeof inputValue ==="undefined" ||
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
    const resp = formatCarrerasOptions(data);
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
