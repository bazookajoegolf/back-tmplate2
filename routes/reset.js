
const bcrypt = require('bcryptjs');
const config = require('config');
const crypto = require('crypto');
const {User, validate} = require('../models/user');
const {Reset} = require('../models/reset');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.post('/', async (req, res) => {

   //this api is the start of the reset password process.  it takes the email address
   //looks up the email address and if found sends an email to that address with a link 
   //that a user can put in its new password (api below)


   const user = await User.findOne({email : req.body.email});
   if(!user) return res.status(404).send("User not found!");
    
    let random ;
    crypto.randomBytes(12, async (err,buf)=> {
       if (err) throw err;
        else random = buf.toString('hex');
        //console.log(`email adddress: ${user} random string ${random}`);
        let transport = nodemailer.createTransport({
            host : "mail.harvestenergy.ca",
            port : 25, 

            auth: null

        });

        // Search reset db for old password requests for same user and delete

        
        const oldResets = await Reset.deleteMany({email : req.body.email});
        console.log(oldResets);

        const reset = new Reset( {
            email : req.body.email , 
            resetPasswordToken: random
        });
    
     await reset.save();

        const textbody = `${config.get('host')}/api/reset/${random}`;
        let mailOptions = {
            from: 'putinconfigyourfromaddress@someaddress.com',
            to: req.body.email,
            subject: 'Password Reset',
            text: textbody
        };
        transport.sendMail(mailOptions, function(err, info){
            if (err) console.log(err);
            else {
                console.log('email sent: ' + info.response);
                //post entry to the reset collection 
            };
        });

        
        return res.status(200).send(`http://${config.get('host')}/api/reset/${random}`);
    });
    
    //console.log("hello" + req.user._id);
    //if(!user) return  res.status(404).send("User not found");
       
    //res.send(req.params.id);
    // req.query would get the values url ?=sortBy=2
    
});

router.post('/:token', async (req, res) => {

    //url should be /api/reset/somenumber
    //this route handles the reset of the password
    //it takes the token, finds it in the reset collection, checks for expiry
    //if still valid, looks for the user in the user collection and updates the password.
    // the request should also contain an email address as a double check to compare both the 
    // and email address match the reset entry in the database.
    
    const resetUser = await Reset.findOne({email : req.body.email, resetPasswordToken : req.params.token });
    if(!resetUser) return res.status(404).send("Password NOT Reset");

    if(resetUser.resetPasswordExpire > Date.now() )
    {
        console.log("you are in the reset world");
        const user = await User.findOne({email: req.body.email});

        if(!user) return res.status(400).send("An error occurred with your request");
        
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.newpassword, salt);
             
        user.save();
        console.log("the password is: " + req.body.newpassword  );
        return res.status(200).send("Password successfully Reset. ");

       

    }
    //const user = await User.findById(req.user._id).select('-password');
    // console.log("hello" + req.user._id);
   // if(!user) return  res.status(404).send("User not found");


    return res.status(400).send("Password reset has expired");
    
    //res.send(req.params.id);
    // req.query would get the values url ?=sortBy=2
    
});


module.exports = router;
