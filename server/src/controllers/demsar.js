import * as consulta from "../database/consults/usuariosC.js"
import excelJS from "exceljs";
import fs from "fs"
export async function exportarExcel(req, res) {
    try {
      let workbook = new excelJS.Workbook();
      const sheet = workbook.addWorksheet("usuarios");
      sheet.columns=[
        {header: "mail_usuario", key: "mail_user", width:25},
        {header: "nombre_usuario", key: "name_user", width:25},
        {header: "direccion_usuario", key: "direction_user", width:25}
      ]
      const data = await consulta.selectFromUsuarios("mail_user,name_user,direction_user");
      data.usuarios.map((value,idx)=>{
        sheet.addRow({
            mail_usuario: value.mail_user,
            nombre_usuario: value.name_user,
            direccion_usuario: value.direction_user
        });
      })
      workbook.xlsx.write(res);
    } catch (error) {
      console.error(error);
      res.statusMessage = "Ocurrio un error";
      res.status(404).end();
    }
  }