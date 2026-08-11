const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes");

const app = http.createServer();

app.on("request", (req, res) => {
  console.log("Received incoming request!");
  let body = [];
  req.on("data", (bodyData) => {
    console.log(bodyData);
    body.push(bodyData);
  });
  req.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log(`Request body contents: ${body}`);
  });

  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
  let resMsg = "<h1>This will show on the screen.</h1>";
  console.log(JSON.stringify(req.method));
  console.log(JSON.stringify(req.url));
  console.log(JSON.stringify(req.headers));
  res.end(resMsg);
});

app.listen(port);
console.log(`The server has started and is listening on port number ${port}`);
