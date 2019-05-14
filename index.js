// code away!
const port = 8000 || process.env.PORT;
const express = require("express");
const userRoutes = require("./userRoutes");
const postsRoutes = require("./postsRoutes");
const helmet = require("helmet");
const logger = require("morgan");

const server = express();

//Builtin MiddleWare
server.use(express.json());

// Third Party MiddleWare
server.use(helmet());
server.use(logger("dev"));

server.use("/api/users/", userRoutes);
server.use("/api/posts/", postsRoutes);

server.listen(port, () => {
  console.log(`Server Listening on Port: ${port}`);
});

function typeLogger(req, res, next) {
  console.log(`${req.method} Request`);
  next();
}

function addName(req, res, next) {
  req.name = req.name || "Cassandra";
  next();
}

function lockout(req, res, next) {
  res.status(403).json({ message: "API lockout" });
}

function moodyGatekeeper(req, res, next) {
  const seconds = new Date().getSeconds();
  if (seconds % 3 === 0) {
    res.status(403).json({ message: "You shall not pass!" });
  }
}
