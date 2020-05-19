const express = require("express");
const cors = require("cors");
const secret = require("../config/secret");
const restricted = require("../auth/restrictred-middleware");

const server = express();

//Router
const userRoutes = require("../users/userRouter");
const authUser = require("../users/authUserRouter");

server.use(express.json());
server.use(cors());

//Endpoints
server.use("/api", userRoutes);
server.use("/api/users", restricted, authUser);

//Base url
server.get("/", (req, res) => {
  res.send("<h1> Server starts here</h1> <h2> Navigate to</h2> <h3>/api</h3>");
});
module.exports = server;
