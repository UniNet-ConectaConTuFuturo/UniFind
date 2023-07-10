import mysql from "mysql2";

export default mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "uninet",
});
