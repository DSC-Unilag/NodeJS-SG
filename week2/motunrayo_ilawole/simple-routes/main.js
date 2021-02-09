const port = 3000, // port number
http = require("http"),
httpStatus = require("http-status-codes"),

routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};

// create a server
app = http.createServer((request, response) => {
    console.log("Received an incoming request");

    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    console.log(request.url);
    let responseMessage;
    switch (request.url) {
        case "/info":
            responseMessage = routeResponseMap["/info"];
            break;
        case "/contact":
            responseMessage = routeResponseMap["/contact"];
            break;
        case "/about":
            responseMessage = routeResponseMap["/about"];
            break;
        case "/hello":
            responseMessage = routeResponseMap["/hello"];
            break;
        default:
            responseMessage = routeResponseMap["/error"];
    }
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response: ${responseMessage}`);
});

app.listen(port);
console.log(`The server has started and is listening on port number : ${port}`);