const { urlencoded } = require('express');
const express = require('express'),
layouts = require('express-ejs-layouts')
app = express();

const homeController = require('./controllers/homeController'),
errorController = require('./controllers/errorController'),
contactController = require('./controllers/contactController');

app.set("port", process.env.port || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express. urlencoded({
    extended: false
})
);
app.use(express.json());

app.get("/name/:myName", homeController.respondWithName);
app.get("/contact", contactController.getContactPage);

app.use(errorController.logErrors);
app.use(errorController.respondInternalError);
app.use(errorController.respondNoResourceFound);

app.listen(app.get("port"), () => {
    console.log(`Server running on http://localhost:${app.get("port")}`);
})