const helmet = require("helmet");
const logger = require("morgan");
const express = require("express");
const server = express();

//Builtin MiddleWare
server.use(express.json());

// Third Party MiddleWare
server.use(helmet());
server.use(logger("dev"));

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

module.exports = server;
