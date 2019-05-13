// code away!
const port = 8000;
const express = require("express");
const server = express();
const userRoutes = require("./userRoutes");

server.use(express.json());

server.use("/api/users/", userRoutes);

server.listen(port, () => {
  console.log(`Server Listening on Port: ${port}`);
});
