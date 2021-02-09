const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs"),
  router = require("./router"),
  plainTextContentType = {
    "Content-Type": "text/plain",
  },
  htmlContentType = {
    "Content-Type": "text/html",
  };

const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (error, data) => {
    if (error) console.log("Error reading the file...");
    res.end(data);
  });
};

router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, plainTextContentType);
  res.end("INDEX");
});
router.get("/index.html", (req, res) => {
  res.writeHead(httpStatus.OK, htmlContentType);
  customReadFile("views/index.html", res);
});
router.post("/", (req, res) => {
  res.writeHead(httpStatus.OK, plainTextContentType);
  res.end("POSTED");
});

http.createServer(router.handle).listen(3000);

console.log(`Server listening on port ${port}`);
