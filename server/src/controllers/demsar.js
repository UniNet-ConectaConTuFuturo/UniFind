import * as consulta from "../database/consults/usuariosC.js"
import excelJS from "exceljs";
import fs from "fs"
export async function exportarExcel(req, res) {
    try {
      console.log("hola")
      let workbook = new excelJS.Workbook();
      console.log("hola1")
      const sheet = workbook.addWorksheet("usuarios");
      console.log("hola2")
      sheet.columns=[
        {header: "mail_usuario", key: "mail_user", width:25},
        {header: "nombre_usuario", key: "name_user", width:25},
        {header: "direccion_usuario", key: "direction_user", width:25}
      ]
      console.log("hola3")
      const data = await consulta.selectFromUsuarios("mail_user,name_user,direction_user");
      console.log(data);
      await data.map((value,idx)=>{
        sheet.addRow({
          mail_user: value.mail_user,
            name_user: value.name_user,
            direction_user: value.direction_user
        });
      })

      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader(
        "Content-Disposition",
        "attachment;filename-"+"usuarios.xlsx"
      );
      workbook.xlsx.write(res);
    } catch (error) {
      console.error(error);
      res.statusMessage = "Ocurrio un error";
      res.status(404).end();
    }
  }