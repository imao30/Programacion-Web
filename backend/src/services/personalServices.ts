import mysql from "mysql2/promise";

const conexion = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "pw12001300",
});

const obtienePersonal = () => {
  try {
    const [results] = conexion.query("SELECT *¨FROM personal");
    return results;
  } catch (error) {
    return { error: "No se puede obtener la lista de personal" };
  }
};
