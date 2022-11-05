const express = require("express");
const AppError = require("./utilities/AppError");
const ErrorHandler = require("./utilities/ErrorHandler");

const app = express();

app.get("/api/v1", (req, res) => {
  res.send({
    message: "Hello",
  });
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(ErrorHandler);

module.exports = app;
