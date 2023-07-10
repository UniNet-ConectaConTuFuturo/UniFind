//Modules
import app from "./app.js";
//CreateServer
app.listen(app.get("port"), () => {
  console.log(
    `Servidor ${app.get("appName")} en el puerto ${app.get("port")} `
  );
});
