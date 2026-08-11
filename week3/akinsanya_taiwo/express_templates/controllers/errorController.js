const httpStatusCode = require("http-status-codes")
exports.logError = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
}
exports.noResourceFound = (req, res) => {
    let errCode = httpStatusCode.NOT_FOUND;
    res.status(errCode);
    res.sendFile(`./public/${errCode}.html`, {
        root: "./"
    })
}
exports.appFailure = (error, req, res, next) => {
    let errorCode = httpStatusCode.INTERNAL_SERVER_ERROR;
    console.error(`ERROR OCCURRED: ${error.stack}`)
    res.status(errorCode);
    res.sendFile(`./public/${errorCode}.html`, {
        root: "./"
    })
}