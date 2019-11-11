

const startupdebug = require('debug')('app:startup');
const dbdebug = require('debug')('app:db');

module.exports = function (app) {

    // in linux enter export NODE_ENV = production   to change from the default of development
    if(app.get('env') === 'development') {
    // app.use(morgan('tiny'));
     // startupdebug a part of the debug package. type in terminal export DEBUG=app:startup to see the output below
     // to show multiple messages type:  export DEBUG=app:startup,app:db   or to see all type export DEBUT=app:*
     // to do at startup type DEBUG=app:startup nodemon index.js
     // if you only have 1 debug type you can set the constant to debug 
     startupdebug('Morgan started');  
 }


}


