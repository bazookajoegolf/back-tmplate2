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
    //console.log("in buddy router, get by id: " + req.params.email);

    const buddylist = await Buddy.findOne({email: req.params.email});
    //console.log(JSON.stringify(score.handicap + score.scores.length));
  
    if(buddylist) return res.status(200).send({message : "ok", buddy: buddylist});
    else return res.status(404).send({message : "New Entry", buddy: null});
    

});

router.post('/:email', async  (req, res) =>{
       
    let me = await Buddy.findOne({email: req.params.email});

    console.log("in posting Temp Score " + me.name);
     
    if(!me) {return res.status(404).send({message : "Unable Create Score"})}
 
  //  default mapping
      me.pendingScores.push(req.body);

  
      await me.save().then( x => {

          return res.status(200).send({message : "InProgress", buddy: x});
      } ).catch(err=> {
  
              return res.status(404).send({message : "Unable Create Score"})
       });

});


router.patch('/', async (req, res) => {

    const sender = await Buddy.findOne({email: req.body.email});
   // if(sender){console.log("found sender")}
    if(req.body.atp) {
     //  console.log("in req.body.atp");
        const ATPremoved = await Buddy.findOne({name: req.body.atp});
        
        const senderAtp = sender.allowedToPost;
        const removedICP = ATPremoved.ICanPost;
        let arr = [];
        let arr2 = [];

        senderAtp.forEach( x => {
            if(x.name != ATPremoved.name) {arr.push(x)}
        }) ;

        removedICP.forEach(y => {
            if(y.email !=senderAtp.email ) {arr2.push(y)}
        })

        sender.allowedToPost = arr;
        ATPremoved.ICanPost = arr2;

        await sender.save().then( x => {
            //  console.log("In buddy save");
               ATPremoved.save().then (y => {console.log("ATP saved")});
              return res.status(200).send({message : "Allowed to Post Updated"});
          } ).catch(err=> {
      
                  return res.status(404).send({message : "Unable create BuddyList"})
           });
 
        // console.log("Senders return value:");
        // console.log(JSON.stringify(sender));
        // console.log("Atp user returned value:");
       // console.table(ATPremoved);
        


        //put save here
       // res.status(200).send({message : "updated lists", atplist : sender, senderlist: ATPremoved});

 


    }
    if(req.body.icp) {
        const ICPremoved = await Buddy.findOne({name: req.body.icp});
        console.log("ICP: " + ICPremoved.email);
        
        
        const senderICP = sender.ICanPost;
        const removedAtp = ICPremoved.allowedToPost;
        let arr = [];
        let arr2 = [];

        senderICP.forEach( x => {
            if(x.name != ICPremoved.name) {arr.push(x)}
        }) ;

        removedAtp.forEach(y => {
            if(y.email !=sender.email ) {arr2.push(y)}
        })

        sender.ICanPost= arr;
        ICPremoved.allowedToPost = arr2;

        await sender.save().then( x => {
          //  console.log("In buddy save");
             ICPremoved.save().then (y => {console.log("ICP saved")});
            return res.status(200).send({message : "Sender Allow Removed"});
        } ).catch(err=> {
    
                return res.status(404).send({message : "Unable create BuddyList"})
         });
 
        // console.log("Senders return value:");
        // console.log(JSON.stringify(sender));
        // console.log("ICP user returned value:");
        // console.log(JSON.stringify(ICPremoved));

        res.status(200).send({message : "updated"});
        
    }


    
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

router.patch('/', async (req, res) => {
    
    if(req.body.buddy.email) {
      let buddy = await Buddy.findOne({email: req.body.buddy.email});
    }
    let me = await Buddy.findOne({email: req.body.myEmail});

//  default mapping
    this.me.pendingScores.inProgress = true;
    this.me.pendingScores.courseid = req.body.teebox.courseid;
    this.me.pendingScores.teeid = req.body.teebox._id;
    this.me.pendingScores.coursename = req.body.friendlyname;
    this.me.pendingScores.teename = req.body.teebox.teebox;
    this.me.pendingScores.username = req.body.myName;
    this.me.pendingScores.partotalscore = req.body.teebox.totalp;
    this.me.pendingScores.slope = req.body.teebox.slope;
    this.me.pendingScores.rating = req.body.teebox.rating;
    this.me.pendingScores.date = req.body.date;
    this.me.pendingScores.year = new Date(req.body.date).getFullYear();

    await buddy.save().then( x => {
        
         me.save().then (y => {console.log("me saved")});
        return res.status(200).send({message : "InProgress", buddy: x});
    } ).catch(err=> {

            return res.status(404).send({message : "Unable create BuddyList"})
     });





});

module.exports = router;