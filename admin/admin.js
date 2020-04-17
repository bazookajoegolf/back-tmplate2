
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const express = require('express');
const {User, validate, adminValidateUpdate} = require('../models/user');
const router = express.Router();

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const  {wrSettings, rdSettings} = require('./filesettings');

// returns a list of users



// returns a list sortable of users with pagination

router.get('/', auth, admin, async (req, res)=> {
	
		
    if(!req.user.isadmin)  return res.status(401).send("not authorized...gtfo");
	
	let settings = rdSettings();
	
    let  s = {};
    let data = new Object();
     s[req.query.sort] =req.query.order;
    const ps = +req.query.pagelength;
    const p = +req.query.page;
   //console.log(`sort by : ${s}  pagesize : ${ps} page by : ${p}`);
   // get all limited and sorted users
   const users = await User.find()
			   .skip(ps*p)
			   .limit(ps)
			   .sort(s)   
			   .select('-password');
   const totalUsers = await User.find().countDocuments();
   //console.log(totalUsers);
   data.users = users;
   data.totalUsers = totalUsers;
   data.minpassword = settings.minpassword;
   data.maxpassword = settings.maxpassword;
   data.minname = settings.minname;
   data.maxname = settings.maxname;
   data.maxnotes = settings.maxnotes;
   //  add min max's here   ie: data.minpassword = variable.minpassword
   
   if(users) {
   	return res.status(200).send(data);
   } else {
	return res.status(400).send({message: "Unable to retrieve Users"});
   }

});

//  checks for a valid email address

//router.get('/:email', auth, admin, async (req, res)=> {
//   return await User.findOne({email :  req.params.email});

//});


// returns if email address found

router.get('/:email', auth, admin, async (req, res)=> {

 
    if(!req.user.isadmin)  return res.status(401).send("not authorized...gtfo");
   
   // get all users
   const email = await User.find({email: req.params.email}).select('-password');
   //console.log("here");
   return res.status(200).send(email);
    

});


// deletes a user

router.delete('/:id', auth, admin, async (req ,res) =>{

    await User.findById( req.params.id, (err, id)=>{
	if(err) {
                 console.log(err + "error");
		 return res.status(401).send({message :"An Error occurred"});}
	if(id) {
                
		id.delete();
	        return res.status(200).send({message:"User Deleted!"});
      	    } 
	else { return res.status(401).send({message :"User Not Found..."}); }
    });
});



//updates a user

router.put('/:id', auth, admin, async (req ,res) =>{

    const result = adminValidateUpdate(_.pick(req.body,['name', 'email','password','isadmin','status','notes','gender', 'roles']));
    
    if (result.error) {
       // 400 bad request
       return res.status(400).send({message : result.error.details[0].message });
    }
    
    const user = await User.findById( req.params.id);
   // console.log(user);
    if(!user)  return res.status(401).send({message :"User Not Found..."});
 
    if(user.email != req.body.email) {
       const duplicateUser = await User.findOne({email : req.body.email});
       if(duplicateUser) {
	  return res.status(401).send({message :"Email address already exists"});
       }
    }	  
  //console.log("before pick");
  //  user =  _.pick(req.body,['name', 'email','password','isadmin','status','notes', 'roles']);
  //  console.log("after pick");
    user.name = req.body.name;
    user.email = req.body.email;
    user.isadmin = req.body.isadmin;
    user.status = req.body.status;
    user.gender = req.body.gender;
    user.notes = req.body.notes;
    user.roles = req.body.roles;

    console.log("the user" + user);
    
    const saveResult = user.save();
    if(saveResult) {   
        return res.status(200).send({message : "User Successfully Updated"});
    } else {
        return res.status(404).send({message : "Unable to update Profile"});
    }


});

//updates password by administrator

router.put('/pw/:id', auth, admin, async (req ,res) =>{
	
	const j = rdSettings();

   if(((req.body.password).length < j.minpassword)) {return res.status(400).send({message : "Password too short.." });}

   if(((req.body.password).length > j.maxpassword)) {return res.status(400).send({message : "Password too long.." });}

   const user = await User.findById( req.params.id);
   if(!user)  return res.status(401).send({message :"User Not Found..."});
 
   console.log(" am I getting a password? : " + req.body.password);
   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(req.body.password, salt);

    const saveResult = user.save();
    console.log("save Result" + saveResult);
    if(saveResult) {   
        return res.status(200).send({message : "User Successfully Updated"});
    } else {
        return res.status(404).send({message : "Unable to update Profile"});
    }



});

//----------------------------------

router.post('/', auth, admin, async (req ,res) =>{
    
    const result = adminValidateUpdate(req.body);
    
    if (result.error) {
        // 400 bad request
        console.log(result.error);
        return res.status(400).send({ message : result.error.details[0].message });
        
    }
 
    let user = await User.findOne({email: req.body.email});
    
    if(user) return res.status(400).send({message : 'User is already registered'});

   user = new User( _.pick(req.body,['name', 'email','password','isadmin','status','notes','gender', 'roles']));
    
    const salt = await bcrypt.genSalt(10);
    console.log("creating salt" + salt);
    user.password = await bcrypt.hash(user.password, salt);


     const saveresult = await user.save(function (err, user){
	if(err) {
            console.log(err);
	    return res.status(404).send({message : result.error.details[0].message});
        } else {
           return res.status(200).send({message : "User Successfully Updated"});
	}
     });

   

});

module.exports = router;
