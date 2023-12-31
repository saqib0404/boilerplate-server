const { rateLimit } = require("express-rate-limit");

let count = 0;

module.exports.viewCounter = (req, res, next) => {
    count++
    console.log(count);
    next()
}


module.exports.limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})