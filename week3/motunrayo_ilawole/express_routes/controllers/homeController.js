exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page ${veg}`);
}

exports.sendPostParam = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Sucessful");
}

exports.logRequestPaths = (req, res, next) => {
    console.log(`request made to: ${req.url}`);
    console.log(req.query);
    next();
}

exports.userSignUpProcessor = (req, res) => {
    
}