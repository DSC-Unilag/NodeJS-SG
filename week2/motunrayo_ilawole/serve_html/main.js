const port = 3000,
http = require("http"),
fs = require("fs"),
httpStatusCodes = require("http-status-codes"),

router = require('./router'),

plainTextContentType = {
    "Content-Type": "text/plain"
},

htmlContentType = {
    "Content-Type": "text/html"
},

imageContentType = {
    "Content-Type": "image/jpeg"
}

customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
        if(error) {
            console.log("Error reading this file...");
        }
        res.end(data);
    })
};

router.get("/", (req, res) => {
    res.writeHead(httpStatusCodes.OK, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req, res) => {
    res.writeHead(httpStatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res);
});

router.get("/sample.html", (req, res) => {
    res.writeHead(httpStatusCodes.OK, htmlContentType);
    customReadFile("views/sample.html", res);
});

router.get("/logo.jpeg", (req, res) => {
    res.writeHead(httpStatusCodes.OK, imageContentType);
    customReadFile("public/images/logo.jpeg", res);
})

router.post("/", (req, res) => {
    res.writeHead(httpStatusCodes.OK, plainTextContentType);
    res.end("POSTED");
});

http.createServer(router.handle)
.listen(port);
console.log(`The server has started and is listening on port number ${port}`);