const handle404Error = (req, res, next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    const urlNotFound = `${req.protocol}://${req.headers.host}${req.path}`
    console.log(urlNotFound)
    next(error);
}

const handleServerError = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
}

module.exports = { handle404Error, handleServerError };