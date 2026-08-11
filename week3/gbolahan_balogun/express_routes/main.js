const homeController = require("./controllers/homeController");

const port = 3000,
  express = require("express"),
  app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(homeController.logRequestPaths);

app.post("/", homeController.postHomeData);

app.get("/items/:vegetable", homeController.sendReqParam);

app.post("/signup", homeController.userSignUpProcessor);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
