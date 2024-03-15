const express = require("express");

const logger = require("./middleware/logger");

const app = express();
const port = 3000;

app.use(logger);

const users = require("./routes/users");

app.use(express.static("public"));

app.use("/api", users);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
