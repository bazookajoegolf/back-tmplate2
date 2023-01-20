
const config = require('config');    
const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function () {



// use config to define db connection string  winston.info('Connected to Mongodb')
//mongoose.connect(config.db, {useNewUrlParser : true, useCreateIndexes : true })
  mongoose.connect ('mongodb+srv://mongoservice:MoBinf0rd1@cluster0.dxjt8.mongodb.net/golfhandicap?retryWrites=true&w=majority' , {useNewUrlParser : true, useCreateIndexes : true })


     .then(()=>  console.log("I'm connected to the db" ));

}

