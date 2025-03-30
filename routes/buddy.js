//const bcrypt = require('bcryptjs');
//const config = require('config');
//const crypto = require('crypto');
//const {User} = require('../models/user');
const { forEach } = require('lodash');
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

router.patch('/', async (req, res) => {
    console.log(req.body);
    console.log("in Patch: "+ req.body.email);
    const sender = await Buddy.findOne({email: req.body.email});
    if(sender){console.log("found sender")}
    if(req.body.atp) {
       // console.log("in req.body.atp");
        const ATPremoved = await Buddy.findOne({name: req.body.atp});
        
        const senderAtp = sender.allowedToPost;
        let arr = [];
        console.log(senderAtp[0].name + "  first name of atp list")
        senderAtp.forEach( x => {
            if(x.name != ATPremoved.name) {arr.push(x)}
        }) ;
        console.log(arr.length);
        sender.allowedToPost = arr;
        res.status(200).send({message : "updated lists", atplist : sender});

     //   console.log("SenderATP: "+ senderAtp[0].email +"  atpremove: " + ATPremoved.email);
       // const indexATP = senderAtp.map(e => e.email).filter(x => x != ATPremoved.email) ;
     //   console.log("in req.body index  " +  JSON.stringify(indexATP));


     //   console.log("ATP: " + ATPremoved.email)
    }
    if(req.body.icp) {
        const ICPremoved = await Buddy.findOne({name: req.body.icp});
        console.log("ICP: " + ICPremoved.email);
    }

    console.log("Sender: " + sender.email );
    res.status(200).send({message : "updated lists"});
    // If(sender && ATPremoved) {
    //     const atp = 
    // }


});



router.post('/', async (req, res) => {

    // request only contains header token which contains _id
    // can return more items here

   // console.log("buddy: " + req.body);
    
    let buddy = await Buddy.findOne({email: req.body.requestedEmail});
    let me = await Buddy.findOne({email: req.body.email});
  
    if(!buddy) {
        const bud = {
            name: req.body.requestedName,
            email: req.body.requestedEmail,
            gender: req.body.requestedGender,
            allowedToPost : [],
            ICanPost : [{name:req.body.name, email:req.body.email,gender:req.body.gender}]
        }
        
        buddy = new Buddy(bud);
        console.log(bud.name);
 
    } 
    else {
        let xx = buddy.ICanPost;
        xx.push({name:req.body.name, email:req.body.email,gender:req.body.gender});
        buddy.ICanPost=xx;

    }
    if(!me) {
        const me2 = {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            allowedToPost : [{name:req.body.requestedName, email:req.body.requestedEmail,gender:req.body.requestedGender}],
            ICanPost : []
        }
       
        me = new Buddy(me2);
        console.log(me.name);
    } 
    else {
        let x = me.allowedToPost;
        x.push({name:req.body.requestedName, email:req.body.requestedEmail,
            gender:req.body.requestedGender});
        me.allowedToPost=x;

    }
    console.log ("buddy name: "+ buddy.name + "  me: " + me.name);
    await buddy.save().then( x => {
        console.log("In buddy save");
         me.save().then (y => {console.log("me saved")});
        return res.status(200).send({message : "Posted", buddy: x});
    } ).catch(err=> {

            return res.status(404).send({message : "Unable create BuddyList"})
     });

    // else {
    
    // }
    //return res.status(200).send({message : "Posted"});
    //res.send(req.params.id);
    // req.query would get the values url ?=sortBy=2
    
});

module.exports = router;