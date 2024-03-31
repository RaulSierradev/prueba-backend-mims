import express from "express";
import request from "supertest";
import router from "../routes/book.routes";

// Creamos una instancia del servidor de express
const app = express();
app.use("/", router);

describe("GET /", () => {
  test("debería devolver un status 200", async () => {
    // Realizamos una solicitud a la ruta '/' en el servidor simulado
    const response = await request(app).get("/");
    // Verificamos que el status code de la respuesta sea 200
    expect(response.status).toBe(200);
  });
});

describe("GET /", () => {
  test("debería devolver un status 200 y un arreglo de libros", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
