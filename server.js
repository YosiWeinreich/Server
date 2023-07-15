const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const channelRouters = require("./routers/channelRouters")
require("dotenv").config();
// const routerUser = require("./routers/user-router");
// const routerComment = require("./routers/comment-router");
const app = express();
const port = process.env.PORT || 8181;


app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res, next) => {
  res.status(200).json({
    server: "1.0.0",
    name: "nodejs-api-server",
  });
});
app.use('/u', channelRouters);

console.log("getAll");
const {DB_USER} = process.env
mongoose
  .connect(
    DB_USER
  )
  .then(() => console.log(` 🍃 mongo-db connected`))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(` 🚀 server started on port ${port}`);
});