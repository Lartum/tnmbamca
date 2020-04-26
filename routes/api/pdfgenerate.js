const express = require('express')
const router = express();
const passport = require('passport');
const Application = require('../../models/Application');

router.get('/',  passport.authenticate('jwt', 
{ session: false }), async (req,res) => {
    try{
      const application = await Application
        .findOne({_userid: req.user._id})
          .populate('user')
      
       res.json(application)
    }
    catch(err){
        console.log(err.message)
    }    
})


    

module.exports = router;
