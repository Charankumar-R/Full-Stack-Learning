const jwt = require('jsonwebtoken');

exports.identifier = (req, res, next) => {
    let token;
    if(req.headers.client === 'not-browser'){
        token = req.headers.authorization;
    } else {
        token = req.cookies['Authorization'];
    }

    if(!token){
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const jwtVerified = jwt.verify(token.split(" ")[1], process.env.TOKEN_SECRET);
        if(jwtVerified) {
            req.user = jwtVerified;
            next();
        }
    } catch (error) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
}