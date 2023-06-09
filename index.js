const express = require("express");
const app = express();
require("dotenv").config();
require("./src/util/db");

const http = require("http").Server(app);
const path = require("path");
const cors = require("cors");

const config = require("./src/config");

app.use(cors());

app.use(express.json());

require("./src/util/soket")(http);

app.use("/auth", require("./src/route/auth"));
app.use("/enemy", require("./src/route/enemy"));
app.use("/user", require("./src/route/user"));

http.listen(config.port, () =>
  console.log("server is connected " + config.port)
);
