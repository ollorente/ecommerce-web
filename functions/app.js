require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const { error404, errorHandler } = require("./middlewares");

const app = express();

mongoose
    .connect(process.env.MONGODB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log(`>>> [DB] is connected... <<<`))
    .catch((error) => console.log(`<<< [ERROR]: ${error} >>>`));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(cookieParser());

app.use("/.netlify/functions/app", require("./routes"));

// catch 404 and forward to error handler
app.use(error404);
// error handler
app.use(errorHandler);

module.exports.handler = serverless(app);
