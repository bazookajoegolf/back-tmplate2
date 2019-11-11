
const config = require('config');    
const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function () {



// use config to define db connection string
mongoose.connect(config.db, {useNewUrlParser : true, useCreateIndexes : true })
    .then(()=> winston.info('Connected to Mongodb'));
}