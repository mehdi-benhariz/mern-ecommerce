const mongoose = require("mongoose");
const logger = require("./logging");
const debug = require("debug")("app:startup");
const path = require("path");
require("dotenv").config({
  path: path.join(process.cwd(), "/config/.env"),
});
debug(`DB_URI : ${process.env.DB_URI}`);
module.exports = function () {
  const dbURI =
    process.env.NODE_ENV === "development" ? process.env.DB_URI : "";
  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  mongoose.connection.on("connected", () =>
    logger.info(`mongoose is connected`)
  );

  mongoose.connection.on("error", (err) =>
    debug(`Error connecting to db ${err}`)
  );

  mongoose.connection.on("disconnected", () => {
    debug(`Mongoose is disconnected`);
  });

  process.on("SIGINT", () => {
    debug("Mongoose disconnected on exit process");
    process.exit(0);
  });
};
