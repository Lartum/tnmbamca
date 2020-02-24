const express = require('express')
const router = express();
const passport = require('passport');


const User = require('../../models/Application');
const Application = require('../../models/Application');




router.get('/',  passport.authenticate('jwt', 
{ session: false }), async (req,res) => {
    try{
         await Application
        .findOne({_userid: req.user._id})
          .populate('user')
           .exec((err,data) =>{
            //    console.log(data)
               res.send({data});
           })
    }
    catch(err){
        console.log(err.message)
    }    
})


    

module.exports = router;
