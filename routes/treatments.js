const express = require('express');
const router = express.Router();
const Treatment = require('../models/treatment')


router.get('/treatments', function(req, res,next){
    Treatment.find({}).then(function(treatment){
        res.send(treatment);
    });
});


router.post('/treatments', function(req, res,next){
    Treatment.create(req.body).then(function(treatment){
        res.send(treatment);
      }).catch(next);

});  
    

router.put('/treatments/:id', function(req, res,next){
    Treatment.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
          treatment.findOne({_id:req.params.id}).then(function(treatment){
            res.send(staff);
          });
     });    
});


router.delete('/treatments/:id', function(req, res,next){
    Treatment.findByIdAndRemove({_id:req.params.id}).then(function(treatment){
      res.send(treatment);
    });
    
});

module.exports = router;
