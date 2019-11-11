
const winston = require('winston');
const debug = require('debug');
const {format} =require('winston');
const {combine, timestamp, label, printf}  = format;

const myFormat = printf(info => {return ` ${info.timestamp} [${info.label}] ${info.level}: ${info.message}`});

module.exports = function (){


   //  format: winston.format.simple(),  use instead of format : combine{...}
   const logger = winston.createLogger({
    level: 'info',
    handleExceptions : true,
    format: combine(
        label({label: 'error logging'}),
        timestamp(),
        myFormat
    ),
   
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({filename: 'error.log'})
      
    ]
    
  });




winston.exceptions.handle(new winston.transports.File({
    filename: 'exception.log',
    handleExceptions: true,
    exitOnError: false 
    })) ;  

process.on('unhandledRejection', (ex) =>{
    logger.log({
        level : 'error',
        message: ex
      });
});
process.on('uncaughtException', (ex)=> {
    logger.log({
        level : 'error',
        message: ex
      });
});
}