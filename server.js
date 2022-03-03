const express = require("express");
const bodyParser = require("body-parser");
// const morgan = require("morgan");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(morgan("dev"))

app.use(require("./routes"));

// Default remote server port or local machine port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Server started');
});
