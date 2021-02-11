exports.respondWithName = (req, res) => {
  res.render("index");
};
exports.contactPage = (req, res) => {
  res.render("contact");
};
exports.aboutPage = (req, res) => {
  res.render("about");
};
exports.contactInfo = (req, res) => {
  res.render("contact");
  console.log(req.body);
};
exports.logRequestPaths = (req, res, next) => {
  console.log(`Request made to ${req.url}`);
  console.log(req.query);
  next();
};