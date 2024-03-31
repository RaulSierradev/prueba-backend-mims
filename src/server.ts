import express from "express";
import "dotenv/config";
import morgan from "morgan";

import db from "./config/bd";

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("Conexión exitosa a la BD");
  } catch (error) {
    console.log("Error de conexión a la BD", error.message);
  }
}
connectDB()

const server = express();

server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", (req, res) => {
  res.send("Hola");
});

export default server;
