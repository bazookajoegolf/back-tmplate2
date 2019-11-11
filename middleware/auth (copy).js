const jwt = require('jsonwebtoken');
const config = require('config');
const fs = require('fs');

var i = "bazookajoegolf Inc";    // Issuer
var s = "bazookajoegolf@outlook.com";  //Subject
var a = "http://handicap.bazookajoegolf.com"  //audience

var verifyOptions = {
   issuer : i,
   subject : s,
   audience : a,
   expiresIn: '4h',  //60*60 signifies 1 hr
   algorithm: ["RS256"]
};

var publicKey = fs.readFileSync('./config/public.key','utf8');


module.exports = function (req, res, next) {

    const token = req.header('x-auth-token');
   

    if(!token) {
        return res.status(401).send('Access denied...no token');

    }

    try {
        //const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        const decoded = jwt.verify(token, publicKey, verifyOptions);
        req.user = decoded;
       // console.log("ID:  " + req.user._id, "email: "+ req.user.email + "  admin: " + req.user.isadmin);
        next();
    } 
    catch (ex) {
        res.status(400).send('Invalid Token');
    }

}


// could have also done module.exports = function(req, res, next)  above.
// don't need the bottom module.exports statement
