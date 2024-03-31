import express from "express";
import "dotenv/config";
import morgan from "morgan";

import db from "./config/bd";
import bookRouter from "./routes/book.routes";
import userRouter from './routes/user.routes'

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("Conexión exitosa a la BD");
  } catch (error) {
    console.log("Error de conexión a la BD", error.message);
  }
}
connectDB();

const server = express();

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

server.use(morgan("dev"));

server.use(express.json());

server.use("/api/books", bookRouter);
server.use("/api/auth", userRouter)

export default server;
