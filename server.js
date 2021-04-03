const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const connectDB = require("./config/db");

const morgan = require("morgan");

//routes file

const bootcamps = require("./routes/bootcamps");

//connetct Database
connectDB();

//load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();
//Body parser
app.use(express.json());

//dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//unhandle promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server and exit code
  server.close(() => process.exit(1));
});
