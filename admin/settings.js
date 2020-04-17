
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const express = require('express');
const router = express.Router();

const {Settings} = require('../models/adminsettings');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const  {wrSettings} = require('../admin/filesettings');




// returns a list sortable of users with pagination

router.get('/', auth, admin, async (req, res)=> {

    if(!req.user.isadmin)  return res.status(401).send({ message:"not authorized...gtfo"});

    var settings = await Settings.findOne();

    if(!settings) {
       settings = new Settings();
       settings.save();
    }

    if(settings)  return res.status(200).send(settings); 
    else          return res.status(400).send({message : "An Error Occurred"}); 
    
});



router.post('/', auth, admin, async (req, res)=> {
    
    

    if(!req.user.isadmin)  return res.status(401).send({message : "not authorized...gtfo"});


   

    try {
     //console.log(req.body);
     var settings = await Settings.findById( req.body.id);
     settings.minpassword = req.body.minpassword;
     settings.maxpassword = req.body.maxpassword;
     settings.minname     = req.body.minname;
     settings.maxname     = req.body.maxname;
     settings.maxnotes    = req.body.maxnotes;
     settings.newusertoken = req.body.newusertoken; 
     settings.usertoken   = req.body.usertoken;
     settings.admintoken  = req.body.admintoken;
     settings.smtphost    = req.body.smtphost;
     settings.smtpsendas  = req.body.smtpsendas;
     settings.smtpsentto  = req.body.smtpsentto;
	 
	 
	// console.log(settings);

     await settings.save(function (err, settings) {
	if(err) {
		   console.log(err);
           return res.status(404).send({message : "Unable to complete request"});
        } else {
           wrSettings();
           return res.status(200).send({message : "Settings Successfully Updated"});
	}
     });
    } catch(e){
        return res.status(404).send({message : e});
    }
   

});

module.exports = router;
