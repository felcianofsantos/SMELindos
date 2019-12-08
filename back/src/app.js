const express = require("express");
require("./db/mongoose");
const userRouter = require("./routes/users");
const taskRouter = require("./routes/questionnaire");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
