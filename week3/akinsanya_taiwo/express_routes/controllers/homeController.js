exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};
exports.logRequestPaths = (req, res, next) => {
  console.log(`Request made to ${req.url}`);
  console.log(req.query);
  next();
};
exports.postReqBody = (req, res) => {
  console.log(req.body);
  res.send("POST successful");
};
exports.UserSignUpProcessor = (req, res) => {
  console.log(req.body);
  res.send("Successfully signed up");
};
