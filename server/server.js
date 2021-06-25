const express = require("express");
const app = express();
const port = 5000;

const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const path = require("path");
require("dotenv").config({
  path: path.join(process.cwd(), "/config/.env"),
});
// Connect to a data base
require("./db/db");

// parse application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

// parse application/json
app.use(express.json());
// cookie parser middleware
app.use(cookieParser());
// Morgan
app.use(morgan("common"));
//file upload
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 },
  })
);
//allow front end
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//routes
const authRoutes = require("./routes/auth");
app.use("/api/v1", authRoutes);

const productRoutes = require("./routes/product");
app.use("/api/v1/product", productRoutes);

const adminRoutes = require("./routes/admin");
app.use("/api/v1/admin", adminRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
