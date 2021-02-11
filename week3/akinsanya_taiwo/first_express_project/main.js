const express = require("express"),
  app = express(),
  port = 3000;
app.get("/", (req, res) => {
  console.log(req.params)
  console.log(req.url)
  console.log(req.body)
  console.log(req.query)
  res.send("Hello Universe");
});
app.listen(port, () => {
  console.log(
    `The express.js server has started and is listening on port number ${port}`
  );
});
