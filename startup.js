const express = require("express");
const port = process.env.PORT || 3001;

const error = require("./middleware/error");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//below are the routes
const users = require("./routes/user");
const logins = require("./routes/login");
const scores = require("./routes/scores");
const playerdata = require("./routes/playerData");

module.exports = function (app) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.use("/api/users", users);
  app.use("/api/logins", logins);
  app.use("/api/scores", scores);
  app.use("/api/playerdata", playerdata);
  app.use(error);
};
