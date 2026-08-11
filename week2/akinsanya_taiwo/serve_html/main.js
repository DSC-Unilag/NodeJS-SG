const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs"),
  router = require("./router");
const plainTextContentType = {
    "Content-Type": "text/plain",
  },
  htmlContentType = {
    "Content-Type": "text/html",
  },
  imageContentType = {
    "Content-Type": "image/jpg",
  };
customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (error, data) => {
    if (error) {
      console.log("Error reading the file");
    }
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
router.get("/info.html", (req, res) => {
  res.writeHead(httpStatus.OK, htmlContentType);
  customReadFile("views/info.html", res);
});
router.get("/pix.jpg", (req, res) => {
  res.writeHead(httpStatus.OK, imageContentType);
  customReadFile("public/images/pix.jpg", res);
});
router.post("/", (req, res) => {
  res.writeHead(httpStatus.OK, htmlContentType);
  res.end("POSTED");
});
const app = http.createServer(router.handle);
app.listen(port);
console.log(`The server has started and is listening on port ${port}`);
