
const config = require('config');    
const mongoose = require('mongoose');
const winston = require('winston');
const db = process.env.DBSTRING;

//const db = "mongodb+srv://mongoservice:vVUYod55IUAD5MEo@cluster0.dxjt8.mongodb.net/golfhandicap?retryWrites=true&w=majority";

module.exports = function () {
    console.log(db);
// use config to define db connection string  winston.info('Connected to Mongodb')
//mongoose.connect(config.db, {useNewUrlParser : true, useCreateIndexes : true })
mongoose.set('strictQuery',false);
//mongoose.connect('mongodb+srv://mongoservice:vVUYod55IUAD5MEo@cluster0.dxjt8.mongodb.net/golfhandicap?retryWrites=true&w=majority');
mongoose.connect(db);
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () => console.log('Connection failed with - ',err))

}




