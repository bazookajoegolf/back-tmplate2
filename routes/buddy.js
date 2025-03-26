//const bcrypt = require('bcryptjs');
//const config = require('config');
//const crypto = require('crypto');
//const {User} = require('../models/user');
const {Buddy} = require('../models/buddy');
//const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//const  {rdSettings} = require('../admin/filesettings');
//var settings= rdSettings();

router.get('/:email', async  (req, res) =>{
    //console.log("in scores get id");
    console.log("in buddy router, get by id: " + req.params.email);

    const buddylist = await Buddy.findOne({email: req.params.email});
    //console.log(JSON.stringify(score.handicap + score.scores.length));
  
    if(buddylist) return res.status(200).send({message : "ok", buddy: buddylist});
    else return res.status(404).send({message : "New Entry", buddy: null});
    

});



router.post('/', async (req, res) => {

    // request only contains header token which contains _id
    // can return more items here

    console.log("buddy: " + req.body.email);
    
    let buddy = await Buddy.findOne({email: req.body.email});
   // console.log("hello  " + buddy.name);
    if(!buddy) { 

        const newBud = new Buddy(req.body);
        buddy = await newBud.save();
        await buddy.save().then( x => {
            console.log("saving buddy. saved value is " + x);
            return res.status(200).send({message : "Posted", buddy: x});
          } ).catch(err=> {
            console.log("Cannot save Buddy: " + err);
            return res.status(404).send({message : "Unable create BuddyList"})
            });
    
    }
    return res.status(200).send({message : "Posted", buddy: x});
    
    //res.send(req.params.id);
    // req.query would get the values url ?=sortBy=2
    
});

module.exports = router;