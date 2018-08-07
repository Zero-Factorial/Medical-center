const express = require('express');
const router = express.Router();
const Staff = require('../models/staff');


router.get('/staffs', function(req, res,next){
    Staff.find({}).then(function(staff){
        res.send(staff);
    });
});


router.post('/staffs', function(req, res,next){
    Staff.create(req.body).then(function(staff){
        res.send(staff);
      }).catch(next);

});  
    

router.put('/staffs/:id', function(req, res,next){
    Staff.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
          Staff.findOne({_id:req.params.id}).then(function(staff){
            res.send(staff);
          });
     });    
});


router.delete('/staffs/:id', function(req, res,next){
    Staff.findByIdAndRemove({_id:req.params.id}).then(function(staff){
      res.send(staff);
    });
    
});

module.exports = router;
