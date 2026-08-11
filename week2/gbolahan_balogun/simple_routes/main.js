const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes");

const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>Learn More About Us.</h1>",
  "/hello": "<h1>Say hello by emailing us here</h1>",
  "/error": "<h1>Sorry the page you are looking for is not here.</h1>",
};

const app = http.createServer();

app.on("request", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });

  let resMsg = routeResponseMap[req.url];
  if (!resMsg) {
    resMsg = "<h1>Welcome to my page.</h1>";
  }

  res.end(resMsg);
});

app.listen(port);
console.log(`Server listening on port ${port}`);
