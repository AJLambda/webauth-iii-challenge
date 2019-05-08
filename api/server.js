const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// const authRouter = require('../auth/auth-router.js');
// const usersRouter = require('../users/users-router.js');

const server = express();
const parser = express.json();

server.use(helmet());
server.use(parser);
server.use(cors());

// server.use('/api/auth', authRouter);
// server.use('/api/users', usersRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
