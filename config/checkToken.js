const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    // Checks for token in headers/query parameter
    let token = req.get('Authorization') || process.env.TESTING_TOKEN

    if(token) {
        // Space between the word Bearer and our token is intentional 
        token = token.replace('Bearer ', '')

        // Validating token  
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            console.log(decoded)
            req.user = err ? null : decoded.user

            // Expiration
            req.exp = err ? null : new Date(decoded.exp * 1000)
        })
        next()
    } else {
        // If token was not sent 
        req.user = null
        next()
    }
}