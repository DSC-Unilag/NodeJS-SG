const express = require('express'),
  app = express(),
  layouts = require("express-ejs-layouts"),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController");
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(homeController.logRequestPaths);
//app.use(express.static("public"))

app.get('/index', homeController.respondWithName);
app.get('/contact', homeController.contactPage);
app.get('/about', homeController.aboutPage)
app.post('/contact', homeController.contactInfo);

app.use(errorController.logError)
app.use(errorController.noResourceFound)
app.use(errorController.appFailure)

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`)
    console.log(`Template engine is ${app.get("view engine")}`)
})