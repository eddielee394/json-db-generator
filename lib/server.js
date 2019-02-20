const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "/static/db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);
server.listen(4000, () => {
  console.log(
    "JSON Server is running - You can access the api routes by using: http://localhost:4000/api" +
      "For more details, visit: https://github.com/typicode/json-server#routes"
  );
});
