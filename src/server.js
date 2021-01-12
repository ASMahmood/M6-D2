const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const server = express();
const port = process.env.PORT;

server.use(cors);

mongoose
  .connect(process.env.MONGO_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    server.listen(port, () => {
      console.log("The server's power level is over ", port);
    })
  );
