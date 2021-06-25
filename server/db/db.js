const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config({
  path: path.join(process.cwd(), "/config/.env"),
});

const dbURI = process.env.NODE_ENV === "development" ? process.env.DB_URI : "";

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () =>
  console.log(`mongoose is connected on ${process.env.NODE_ENV}`)
);

mongoose.connection.on("disconnected", () =>
  console.log(`Mongoose is disconnected`)
);

process.on("SIGINT", () => {
  console.log("Mongoose disconnected on exit process");
  process.exit(0);
});

module.exports = mongoose;
