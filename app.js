require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 8080;

app.set('port', port)

app.listen(port, () => {
  console.log(`Server started listening on port ${port}`);
});
