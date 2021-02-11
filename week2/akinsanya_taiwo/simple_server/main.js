const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes");
const app = http.createServer((req, res) => {
  console.log("Received an incoming request");
  res.writeHead(httpStatus.OK, {
    "Content-type": "text/html",
  });
  let resMessage = "<h1>Hello World</h1>";
  res.write(resMessage);
  res.end();
  console.log(`Sent a message: ${resMessage}`);
});
app.listen(port);
console.log(`The server has started and is listening on port ${port}`);
