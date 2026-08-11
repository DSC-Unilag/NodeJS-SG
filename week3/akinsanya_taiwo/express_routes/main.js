const express = require("express"),
  homeController = require("./controllers/homeController"),
  app = express(),
  port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(homeController.logRequestPaths);
app.post("/", homeController.postReqBody);
app.get("/items/:vegetable", homeController.sendReqParam);
app.post("/sign_up", homeController.UserSignUpProcessor);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
