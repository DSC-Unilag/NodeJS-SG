const PORT = 3000, // Port number

http = require('http'), //Require the http module

// Require the http-status code
httpstatus = require('http-status-codes'),

// create a server using the http module

app = http.createServer((req, res) =>{
    console.log('Recieved an incoming request!');
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
let resMessage = "<h1>Hello, World!</h1>";
console.log(JSON.stringify(req.method));
    console.log(JSON.stringify(req.url));
    console.log(JSON.stringify(req.headers));
    res.write(resMessage);
    res.end();
    console.log(`Sent a response : ${resMessage}`);
});

app.listen(PORT);
console.log(`The server has started and it is listening to port number:${PORT}`);