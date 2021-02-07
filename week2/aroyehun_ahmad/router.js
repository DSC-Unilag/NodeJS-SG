const { url } = require("inspector");

const { StatusCodes } = require("http-status-codes"),
htmlContentType = {
    "Content-Type": "text/html"
  },
  routes = {
      GET: {
          "/info": (req, res) => {
            res.writeHead(StatusCodes.OK, {
                "Content-Type": "text/plain"
            });
            res.end("Welcome to the Info Page!")
          }
      },
      POST: {}
  };

  exports.handle = (req, res) => {
      try {
          if (routes[req.method][req.url]) {
              routes[req.method][req.url](req, res);
          } else {
            res.writeHead(StatusCodes.NOT_FOUND, htmlContentType);
            res.end("<h1>No Such file Exist</h1>")  
        }
      }
      catch (ex) {
          console.log("error: " + ex);
      }
  }

  exports.get = (url, action) => {
      routes["GET"][url] = action
  }
  exports.post = (url, action) => {
      routes["POST"][url] = action
  }