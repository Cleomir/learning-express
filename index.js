const express = require("express");

const users = require("./routes/users");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use("/api", users);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
