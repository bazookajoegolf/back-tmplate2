


require('express-async-errors');
const fs = require('fs');
//const https = require('https');

const config = require('config');

// const morgan = require('morgan');  // logging middleware

// cors added for development, may not need for prod

const cors = require('cors');
// load express
const express = require('express')
const app = express();
var http = require('http');
var https = require('https');


//config start 
require('./startup/config')(app);

//error exception logging
require('./startup/logging')();

//cache settings from database

//require('./startup/cache')();

// db connection
require('./startup/database')();
app.use(cors());
//routes
require('./startup/routes')(app);

//development debug
require('./startup/debug-dev')(app);


app.use(express.static('first'));

app.use(express.static(__dirname + '/Dist'));

app.get('/', (req, res)=> {
    //res.send('hello you');
    //res.send(" home page");
    
   
});



// in ubuntu run export PORT = 3000 set the env var  *** case sensitive ***

const port = process.env.PORT || 3000;

// const options = {
// 	key: fs.readFileSync('./certs/key.pub','utf8'),
// 	cert: fs.readFileSync('./certs/certs.pub','utf8'),
// 	requestCert: false,
// 	rejectUnauthorized: false
// 	};

	var privateKey = fs.readFileSync('certs/localhost.pem');
	var certificate = fs.readFileSync('certs/localhost-key.pem');	
	
	var credentials = {key: certificate, cert: privateKey};
     var httpsServer = https.createServer(credentials, app);

   //var httpsServer = https.createServer(options, app);

var httpServer = http.createServer(app);
httpServer.listen(3000);
httpsServer.listen(3030);

 const tm = Date(Date.now()).toLocaleString();

//console.log("The port in the environment is  " + port);
//app.listen(port, () => console.log(`${tm} : Listening on port ${port} `));

//server.listen(port, ()=> console.log(`listening on port ${server.address().port}}`));




