import server from "./server";

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
