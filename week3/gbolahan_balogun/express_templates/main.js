const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(layouts);

app.use(express.static("public"));

app.use(express.json());

app.get("/name/:myName", homeController.respondWithName);

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
