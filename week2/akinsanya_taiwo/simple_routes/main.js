const { error } = require("console");

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes");
const app = http.createServer((req, res) => {
  console.log("Received an incoming request");
  res.writeHead(httpStatus.OK, {
    "Content-type": "text/html",
  });
  let resMessage = "<h1>Hello World</h1>";
  const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact us</h1>",
    "/about": "<h1>Learn more about us</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Error, page not found</h1>",
  };
  if (req.url in routeResponseMap) {
    res.write(routeResponseMap[req.url]);
  } else {
    console.log('Error')
  }
  res.write(resMessage);
  res.end();
  console.log(`Sent a message: ${resMessage}`);
});
app.listen(port);
console.log(`The server has started and is listening on port ${port}`);
