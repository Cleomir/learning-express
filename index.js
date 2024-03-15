const express = require("express");
const handleBars = require("express-handlebars");

const logger = require("./middleware/logger");
const users = require("./routes/users");
const app = express();
const port = 3000;

// template engine
app.engine("handlebars", handleBars.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// middleware
app.use(logger);
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.render("home");
});
app.use("/api", users);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
