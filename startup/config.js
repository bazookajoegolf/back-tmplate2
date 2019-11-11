
const config = require('config');
const helmet = require('helmet');

// need to set or export jwtPrivatkey :   ie:  export templatejwt = "abc123" use something different
module.exports = function (app){

//app.use(helmet());   // used to secure http headers. add soon as possible

    if (!config.get('jwtPrivateKey')){
        console.error('FATAL ERROR: jwtPrivateKey is not defined');
        process.exit(1);
    };

    // catch errors for all routes
//app.use(logger);
// configuration example
// in linux enter export NODE_ENV = production   to change from the default of development
// to reset env variable type:   export NODE_ENV=  
console.log('Application name: ' + config.get('name') );
console.log('Mail server: ' + config.get('mail.host') );
//console.log('password: ' + config.get('mail.password') );




}
