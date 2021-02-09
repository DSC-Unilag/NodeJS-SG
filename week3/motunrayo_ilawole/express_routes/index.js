const port = 3000,
express = require('express'),
app = express();

const homeController = require("./controllers/homeController")

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(homeController.logRequestPaths);

app.post("/sign_up", homeController.userSignUpProcessor);

app.post("/", homeController.sendPostParam);

app.get("/items/:vegetable", homeController.sendReqParam);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

