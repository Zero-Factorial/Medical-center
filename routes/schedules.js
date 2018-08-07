const express = require('express');
const router = express.Router();
const S_Doctor = require('../models/schedule')


router.get('/doctors/schedules', function(req, res,next){
    S_Doctor.find({}).then(function(s_doctors){
        res.send(s_doctors);
    });
});


router.post('/doctors/schedules', function(req, res,next){
    S_Doctor.create(req.body).then(function(s_doctor){
        res.send(s_doctor);
      }).catch(next);

});  
    

router.put('/doctors/schedules/:id', function(req, res,next){
    S_Doctor.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
          S_Doctor.findOne({_id:req.params.id}).then(function(s_doctor){
            res.send(s_doctor);
          });
     });    
});


router.delete('/doctors/schedules/:id', function(req, res,next){
    S_Doctor.findByIdAndRemove({_id:req.params.id}).then(function(s_doctor){
      res.send(s_doctor);
    });
    
});

module.exports = router;
