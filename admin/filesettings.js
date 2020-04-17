
const mongoose = require('mongoose');
const {Settings} = require('../models/adminsettings');


const jsonfile = require('jsonfile');

const file = __dirname + '/settings.json';

console.log("directory name: " + __dirname);

async function wrSettings() {
	
    var settings = await Settings.findOne();
    //console.log();
	
 jsonfile.writeFile( file,  settings, function(err) {
	 
 if (err) {  return console.error("Is this the error: "+ err); }
 else {return console.log("file written successfully")}
       
 });
}


 function rdSettings() {

	return  jsonfile.readFileSync( file); 
	

};


exports.wrSettings = wrSettings;
exports.rdSettings = rdSettings;
   

