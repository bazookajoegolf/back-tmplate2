
const bcrypt = require('bcryptjs');
const config = require('config');
const crypto = require('crypto');
const {User, validate} = require('../models/user');
const {Reset} = require('../models/reset');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const  {rdSettings} = require('../admin/filesettings');
var settings= rdSettings();


router.post('/', async (req, res) => {

   //this api is the start of the reset password process.  it takes the email address
   //looks up the email address and if found sends an email to that address with a link 
   //that a user can put in its new password (api below)
   console.log("in the reset api: " + req.body.email); 

   const user = await User.findOne({email : req.body.email});
   if(!user) return res.status(404).send({message: "Unable to Handle your Request"});
    
    let random ;
    crypto.randomBytes(12, async (err,buf)=> {
       if (err) throw err;
        else random = buf.toString('hex');
        //console.log(`email adddress: ${user} random string ${random}`);
        let transport = nodemailer.createTransport({
            host : settings.smtphost,  //  settings.
            port : 25, 
            auth: null
        });



        // Search reset db for old password requests for same user and delete

        
        const oldResets = await Reset.deleteMany({email : req.body.email});
        
        var x = new Date();
    
        x.setHours(x.getHours() + settings.newusertoken);
      
        
        const reset = new Reset( {
            email : req.body.email , 
            resetPasswordToken: random,
            resetPasswordExpire: x
        });
    
     await reset.save();

    const textbody = `${config.get('host')}/api/reset/${random}`;

    const htmlbody = `<div><h3 style="margin-bottom: 40px;text-align: center">To reset your password,  click the following link and enter code: </h3>
			   <p style="margin-bottom:30px;text-align: center"> ${config.get('host')}/reset-ack/${random} </p> 
			   <p style="text-align:center">OR:    enter the following code into the Reset page.  ${random} </p>
		     </div>`;
        let mailOptions = {
            from: settings.smtpsendas,
            to: 'brad.zingle@harvestenergy.ca ',    //req.body.email,
            subject: 'Password Reset',
            html: htmlbody
        };
        transport.sendMail(mailOptions, function(err, info){
            if (err) console.log(err);
            else {
                console.log('email sent: ' + info.response);
                //post entry to the reset collection 
            };
        });

        
       // return res.status(200).send(`http://${config.get('host')}/api/reset/${random}`);
	return res.status(200).send({message : "You request has been submitted, you will receive an Email Shortly"});
    });
    
    
});

router.post('/:token', async (req, res) => {

    //url should be /api/reset/somenumber
    //this route handles the reset of the password
    //it takes the token, finds it in the reset collection, checks for expiry
    //if still valid, looks for the user in the user collection and updates the password.
    // the request should also contain an email address as a double check to compare both the 
    // and email address match the reset entry in the database.
    
 
   console.log(req.body.email + "  " + req.params.token);
    const resetUser = await Reset.findOne({email : req.body.email, resetPasswordToken : req.params.token });
    console.log(resetUser);
    if(!resetUser) {
        
	return res.status(404).send({message : "Password NOT Reset"});
    }
     const currentTime = new Date;
	 
	 console.log("Current time: " ,currentTime );
    if(resetUser.resetPasswordExpire > currentTime) {
    
        console.log("getting here");
        const user = await User.findOne({email: req.body.email});

        if(!user) return res.status(400).send({message : "An error occurred with your request"});
        
        const salt = await bcrypt.genSalt(10);
		
		if(req.body.newpassword.length < settings.minpassword) {
			return res.status(401).send({message : "Minimum password length is " + settings.minpassword });
		}
        user.password = await bcrypt.hash(req.body.newpassword, salt);
             
        user.save();
       
        return res.status(200).send({message : "Password successfully Reset. "});

    }

    else {
		console.log("expire: " + resetUser.resetPasswordExpire + "  now:  "  + currentTime);
	    return res.status(401).send({message : "Password reset has expired"});
    }

    
    
    //res.send(req.params.id);
    // req.query would get the values url ?=sortBy=2
    
});


module.exports = router;
