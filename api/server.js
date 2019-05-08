const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const server = express();
const parser = express.json();

server.use(helmet());
server.use(parser);
server.use(cors());

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
