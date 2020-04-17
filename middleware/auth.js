const jwt = require('jsonwebtoken');
const config = require('config');
const fs = require('fs');

const  {rdSettings} = require('../admin/filesettings');

var i = "bazookajoegolf Inc";    // Issuer
var s = "bazookajoegolf@outlook.com";  //Subject
var a = "http://handicap.bazookajoegolf.com"  ;//audience

var settings= rdSettings();
var e = settings.usertoken + 'h';



var verifyOptions = {
   issuer : i,
   subject : s,
   audience : a,
   expiresIn: e,  
   algorithm: ["RS256"]
};

var publicKey = fs.readFileSync('./config/public.key','utf8');


module.exports = function (req, res, next) {

    const token = req.header('x-auth-token');
   // console.log("token sent to auth.js middleware " + token);

    if(!token) {
        return res.status(401).send('Access denied...no token');

    }

    try {
        //const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        const decoded = jwt.verify(token, publicKey, verifyOptions);
        req.user = decoded;
	var j =  new Date().getTime();
	
	if (j < req.user.exp) { res.status(400).send({"message" :'Your Session as expired.'}); }
       // console.log("ID:  " + req.user._id, "email: "+ req.user.email + "  admin: " + req.user.isadmin + "exp: " +req.user.exp);
	//console.log("exp: " +req.user.exp + " current time value: " + j);
        next();
    } 
    catch (ex) {
        res.status(400).send({message :'Invalid Token'});
    }

}


// could have also done module.exports = function(req, res, next)  above.
// don't need the bottom module.exports statement
