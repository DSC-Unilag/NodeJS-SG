const port = 3000,
      http = require('http'),
      { StatusCodes } = require('http-status-codes'),
      router = require('./router'),
      fs = require('fs'),
      plainTextContentType = {
        "Content-Type": "text/plain"
      }, 
      htmlContentType = {
        "Content-Type": "text/html"
      },
      customReadFile = (file, res) => {
          fs.readFile(`./${file}`, (err, data) => {
              if (err) {
                  throw err
              }
              res.end(data);
          });
      }
router.get("/", (req, res) => {
    res.writeHead(StatusCodes.OK, plainTextContentType);
    res.end("INDEX")
});
router.get("/index.html", (req, res) => {
    res.writeHead(StatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res)
});
router.post("/", (req, res) => {
    res.writeHead(StatusCodes.OK, plainTextContentType);
    res.end("POSTED")
});

const routeMap = {
    "/": "views/index.html"
};

// const getViewUrl = (url) => {
//     return `views${url}.html`
// }
 
 http.createServer(router.handle).listen(port);
 console.log(`The server has started and is listening on port number: ${port}`);
