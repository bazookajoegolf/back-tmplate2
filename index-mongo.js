

const mongoose = require('mongoose');


// use config to define db connection string
mongoose.connect('mongodb://localhost/playground', {useNewUrlParser : true})
    .then(()=> console.log('Connected to Mongodb'))
    .catch((err)=> console.error('Unable to connect to MongoDB...', err));



const courseSchema = new mongoose.Schema({

    // mongoose validators
    // minlength, maxlength, match (a regex)
    //  to get a specific value:
    // category : { type: String, required : true, enum: ['web', 'internet', 'popular']}
    // for numbers:  min: 5, max : 200   ----lecture 103
    // custom validators... look at tag validation ---- lecture 104
    // async validators ...  look at async tag   -----lecture 105
    


    // other schema options for strings:  lowercase, uppercase, trim (removes padding)  --- lecture 107
    // custom getters and setters   get : v => Math.round(v)     set: v=> Math.round(v)
    name : {type: String, required : true, minlength: 5, maxlength: 255, lowercase: true},  
    author : String,
    tags : {
        type: Array,
        validate : { 
            validator: function(v) {
                return v && v.length > 0;
            } ,
            message: 'A course should have at least one tag'
        }
    },
    asynctags : {
        type: Array,
        validate : { 
            isAsync : true,
            validator: function(v , callback ) {

                setTimeout(function () {
                 // async work   
                 const result = v && v.length > 0;
                 callback(result);
                }, 1000);

                
            } ,
            message: 'An async course should have at least one tag'
        }
    },
    date : {type : Date, default : Date.now},
    isPublished : Boolean,
    price: { type: Number, required: function() {return this.isPublished} }
});

const Course = mongoose.model('course', courseSchema);

async function createCourse() {

    const course = new Course ({
        name: 'empty tags',
        author: 'Hamedami',
        tags: [],
        asynctags: [],
        isPublished : 'true',
        price: 10
    
    
    });
     
    try {
        
        const result = await course.save();
        //await course.validate(); can't do await, this returns void, therefore have no method of knowing if successful epi 102
        console.log(result);
    } 
    catch (ex){
        //console.log(ex.message);
        for (field in ex.errors)
           console.log(ex.errors[field].message);
    }


}
 createCourse();


async function getCourses() {

    // comparison operators
    //   eq (equal)
    // ne ( not equal)
    // gt (greater than)
    // gte (greater than equal to)
    // lt (less than)
    // lte (less than equal)
    // in
    //  nin (not in)

    // .find({price : 10})    --- will return only items equally 10 $
    // .find({price: {$gt : 10}})   --- will return items greater than $10
    // .find({price: {$gt: 10, $lt: 20}})  -- will return between 10 and 20
    // .find({price: {$in: [10, 15, 20] } } ) --- will return items valued at 10 15 or 20 

    // logical operators
    //  or    and 
    // .find().or([ {author: 'Mosh'}, {isPublished : 'true'}])
    //  and is very similar to complex find

    // regex expressions
    // .find({author: /^Mosh/})  ^ represents starts with.  this will return anything that starts with Mosh
    // .find({author: /gle$/i})    $ represents ends with.   
    // the /i at the end makes this query case insensitive 
    // .find({author: /.*Mosh.*/i})  .*patterh.*  will search for any pattern containing Mosh
    // you can do more regex ...  googls javascript regex
    // when searching an array find( tags: {$in: ['backend','frontend']})
    // another way to find items in an array use .or([{tags: 'frontend'}, {tags: 'backend'}])


    const courses = await Course
        .find({author: 'Mosh', isPublished : 'true'})
        .skip(1)
        .limit(10)
        .sort({name : 1})   // can also be ('name') or ('-name') decending
        .select({ name: 1, tags : 1});
       //.count();   will  return the amount of documents  note: remove the select statement.. not needed
    console.log(courses);

};

//getCourses();

// two methods  find first then upate or update directly
async function updateCourse(id) {

    const course = await Course.findById(id);
    // const result = await Course.update({_id: id},
    //                 {$set : { isPublished: false, author: 'mosh'}} );  --- this method is update directly
    // update will return the result of the transaction (how many docs update etc.)
    // if you want to return the original document replaced update withe findByIdAndUpdate
    // to get the updated document and a ,{new : true } after the last curly brace  ---lecture 99 : 5:33
    if (!course) return;
    course.isPublished = true;
    course.author = 'some other author';
    
        const result = await course.save();
        console.log(result);

    //or

    // course.set({isPublished: true, author: 'another authore})


}
// updateCourse(1);

async function removeCourse(id) {

    const result = await Course.deleteOne({_id: id});
    // to delete multiple docs choose deleteMany.  will return the the an ack
    // to delete with the resulting doc returned use findByIdAndRemove
    console.log(result);
}

// removeCourse(1);